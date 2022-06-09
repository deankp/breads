const React = require('react')
const Default = require('./layouts/Default')

function show404 ({bread}) {
    return (
        <Default>
            <h3> 404 Page Not Found</h3>
        </Default>
    )
}

module.exports = show404