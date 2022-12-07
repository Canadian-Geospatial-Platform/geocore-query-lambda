const query = function() {
    return 'SELECT properties[1].id AS id FROM v2_25 LIMIT 3'
}

module.exports = {
    query
}