import PropTypes from "prop-types"

function CapitalizeService(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

CapitalizeService.propTypes = {
    str: PropTypes.string.isRequired,
}

export default CapitalizeService