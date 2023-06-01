import PropTypes from "prop-types"
const SelectLanguage = ({onLanguagueChange}) => {
  

  
    return (
    <div className="languages">
        <span onClick={() => onLanguagueChange("es")}>🟥</span>
        <span onClick={() => onLanguagueChange("en")}>🟦</span>
    </div>
  )
}

SelectLanguage.propTypes ={
    onLanguagueChange: PropTypes.func
}
export default SelectLanguage