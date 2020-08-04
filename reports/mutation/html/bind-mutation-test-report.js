document.querySelector('mutation-test-report-app').report = {"files":{"/home/lyraah/Trybe/projetos/sd-05-block15-project-react-testing-library/src/components/FavoritePokemons.js":{"language":"javascript","mutants":[{"id":"0","location":{"end":{"column":27,"line":13},"start":{"column":13,"line":13}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"1","location":{"end":{"column":45,"line":13},"start":{"column":30,"line":13}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"}],"source":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport { pokemonType } from '../types';\nimport Pokemon from './Pokemon';\n\nimport './favorite-pokemons.css';\n\nclass FavoritePokemons extends React.Component {\n  static notFound() {\n    return (\n      <div>\n        <p>{`No favorite ` + `pokemon found`}</p>\n      </div>\n    );\n  }\n\n  static renderFavoritePokemon(pokemon) {\n    return (\n      <div key={pokemon.id} className=\"favorite-pokemon\">\n        <Pokemon pokemon={pokemon} isFavorite />\n      </div>\n    );\n  }\n\n  renderFavoritePokemons() {\n    const { pokemons } = this.props;\n    const { renderFavoritePokemon } = FavoritePokemons;\n\n    return (\n      <div className=\"favorite-pokemons\">\n        {pokemons.map((pokemon) => renderFavoritePokemon(pokemon))}\n      </div>\n    );\n  }\n\n  render() {\n    const { notFound } = FavoritePokemons;\n    const { pokemons } = this.props;\n    const isEmpty = pokemons.length === 0;\n\n    return (\n      <div>\n        <h2> Favorite pokémons </h2>\n        {isEmpty ? notFound() : this.renderFavoritePokemons()}\n      </div>\n    );\n  }\n}\n\nFavoritePokemons.propTypes = {\n  pokemons: PropTypes.arrayOf(pokemonType.isRequired),\n};\n\nFavoritePokemons.defaultProps = {\n  pokemons: [],\n};\n\nexport default FavoritePokemons;\n"}},"schemaVersion":"1.0","thresholds":{"high":80,"low":60,"break":null}};