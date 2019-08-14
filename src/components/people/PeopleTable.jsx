import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import styled from "styled-components";

const SummaryTableCell = styled(Table.Cell)`
  &&& {
    text-align:center
  }
`;

const PeopleTable = (props) => {

    const [state, setState] = useState({
        column: null,
        data: [],
        direction: null,
        film: null,
        characters: props.characters
    });

    useEffect(() => {
      setState({
        ...state,
        characters: props.characters
      })
    }, [props.characters]);

    let handleSort = clickedColumn => () => {
        const { column, characters, direction } = state;
        
        if (column !== clickedColumn) {

          setState({
            ...state,
            column: clickedColumn,
            characters: _.sortBy(characters, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        } else {
          setState({
            ...state,
            characters: characters.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
          })
        }
      }

    const { column, characters, direction } = state

      //figure out total height
      //e.g. 170 cm (5ft/6.93in)

      let getImperialMeasurements =(n) => {
        var realFeet = ((n*0.393700787) / 12);
        var feet = Math.floor(realFeet);
        var inches = Math.round((realFeet - feet) * 12);
        return {
          feet,
          inches
        }
      }

      let heightInCM = 0;
      _.each(characters, (character) => {
        if (character.height !== 'unknown') {
          heightInCM += parseInt(character.height, 10);
        }
      });

    let imperial = getImperialMeasurements(heightInCM);
    let heightLabel = `${heightInCM} cm (${imperial.feet}ft/${imperial.inches}in)`

    let summary = {
      total: 0,
      heightLabel: heightLabel,
      totalHeight: heightInCM
    }

    if (characters && characters.length) {
      summary.total = characters.length;
    }

    // log.debug('PeopleTable characters %o', characters);

    return (
        <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={handleSort('name')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'gender' ? direction : null}
              onClick={handleSort('gender')}
            >
              Gender
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'height' ? direction : null}
              onClick={handleSort('height')}
            >
              Height
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(characters, ({ name, gender, height }) => (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{gender}</Table.Cell>
              <Table.Cell>{height}</Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
          <SummaryTableCell colSpan="3">
            total: <strong>{summary.total}</strong>, height: <strong>{summary.heightLabel}</strong>
          </SummaryTableCell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
};

export default PeopleTable;