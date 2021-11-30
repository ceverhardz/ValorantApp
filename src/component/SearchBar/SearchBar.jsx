import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import styled from 'styled-components'

const StyledInputGroup = styled(InputGroup)`
    max-width: 300px;
`

export default function SearchBar(props) {
    return (
        <div>
            <StyledInputGroup className="mb-3 mt-3 d-flex justify-content-center">
                <FormControl
                placeholder="Cari agent disini..."
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => props.onChange(e.target.value)}
                />
            </StyledInputGroup>
        </div>
    )
}
