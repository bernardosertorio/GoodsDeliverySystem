import React from 'react'
import PlacesAutoComplete from 'react-places-autocomplete'
import { Input } from '@rocketseat/unform'
import { Container } from './styles'
import PropTypes from 'prop-types'

export default function PlacesComplete({onSelect, onChange, value, placeholder, name}) {
  
  PlacesComplete.defaultProps ={
    placeholder: "Campo de input",
    name: 'autocomplete'
  }

  PlacesComplete.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string, 
  }

  const searchOptions = {
    componentRestrictions: { country : ['br'] },
    types: [ 'adress' ] 
  }

  return (

    <PlacesAutoComplete
    searchOptions={searchOptions} 
    value={value}
    onChange={onChange}
    onSelect={onSelect}
    placeholder={placeholder}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
      <>
        <Input name={name} type="text" {...getInputProps({ placeholder })} />

        <div>
          {loading ? <div>...Loading</div> : null}

          {suggestions.map(suggestion => {
            const className = suggestion.active
            ? 'suggestion-item-active'
            : 'suggestion-item'

            return (
              <Container
                {...getSuggestionItemProps(suggestion, { className })}
              >
                <div className={className}>{suggestion.description}</div>
              </Container>
            )  
          })}
        </div>
      </>
    )}
  </PlacesAutoComplete>
  )
}