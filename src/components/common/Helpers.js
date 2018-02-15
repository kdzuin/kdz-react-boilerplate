const Helpers = {
    validateSpecification: function (props, propName, componentName, specification, specificationName) {
        if (props[ propName ] && Object.values(specification).indexOf(props[ propName ]) === -1) {
            return new Error(`Incorrect value in '${propName}' prop, should be one of {${specificationName}}. Please refer to the Documentation.`);
        }
    }
};

export default Helpers;
