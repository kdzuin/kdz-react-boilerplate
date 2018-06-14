const Helpers = {
    validateSpecification: function (props, propName, componentName, specification, specificationName) {
        if (props[ propName ] && Object.values(specification).indexOf(props[ propName ]) === -1) {
            return new Error(`Incorrect value in '${propName}' prop, should be one of {${specificationName}}. Please refer to the Documentation.`);
        }
    },
    flatten: object => {
        return Object.assign( {}, ...function _flatten( objectBit, path = '' ) {
            return [].concat(
                ...Object.keys( objectBit ).map(
                    key => typeof objectBit[ key ] === 'object' ?
                        _flatten( objectBit[ key ], `${ path }/${ key }` ) :
                        ( { [ `${ path }/${ key }` ]: objectBit[ key ] } )
                )
            )
        }( object ) );
    },
};

export default Helpers;
