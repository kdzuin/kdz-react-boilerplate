import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';
import { Text } from '../Typography';
import Loader from '../Loader/Loader';

const propTypes = {
    /** ```id``` for the dom-element */
    id: PropTypes.string,
    /** ```<Icon />``` in the Button. */
    icon: PropTypes.object,
    /** Text in the Button. */
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    /** ```Button.Type.FILLED``` */
    type: function (props, propName, componentName) {
        if (props[ propName ] && Object.values(Button.Type).indexOf(props[ propName ]) === -1) {
            return new Error(`Incorrect value in '${propName}' prop.`);
        }
    },
    /** ```Button.Size.MEDIUM``` */
    size: function (props, propName, componentName) {
        if (props[ propName ] && Object.values(Button.Size).indexOf(props[ propName ]) === -1) {
            return new Error(`Incorrect value in '${propName}' prop.`);
        }
    },
    /** ```Button.Color.Palette.PRIMARY``` */
    color: PropTypes.any,
    /** Button widths depending on the content */
    narrow: PropTypes.bool,
    /** Lighter version of Button with round corners */
    light: PropTypes.bool,
    /** The button is actual ```<button/>``` inside the form */
    isRealButton: PropTypes.bool,
    /** Disabled state */
    isDisabled: PropTypes.bool,
    /** Hover state, as addition to CSS ```:hover``` */
    isHovered: PropTypes.bool,
    /** Pressed state, as addition to CSS ```:active``` */
    isPressed: PropTypes.bool,
    /** Loading state */
    isLoading: PropTypes.bool,
    /** Button can be transformed into ```<a/>``` link with ```href``` prop */
    href: PropTypes.string,
    /** To apply ```target="_blank"``` or not */
    openInBlank: PropTypes.bool,
    /** Click event handler */
    onClick: PropTypes.func,
    /** Flag to disable CSS triggers */
    ignoreTriggers: PropTypes.bool
};

const Size = {
    SMALL: 'button--sm',
    MEDIUM: 'button--md',
    LARGE: 'button--lg',
    XLARGE: 'button--xlg'
};

const Type = {
    FILLED: 'button--filled',
    STROKE: 'button--stroke',
    TRANSPARENT: 'button--transparent',
    MONOCHROME: 'button--monochrome'
};

const Color = {
    Palette: {
        PRIMARY: 'button--color-primary',
        RED_CARROT: 'button--color-red-carrot',
        PINK_ROSE: 'button--color-pink-rose',
        YELLOW_SUN: 'button--color-yellow-sun',
        GREEN_DEW: 'button--color-green-dew',
        GREEN_GRASS: 'button--color-green-grass',
        PURPLE_LAVANDA: 'button--color-purple-lavanda',
        BLUE_SKY: 'button--color-blue-sky',
        BLUE_RAIN: 'button--color-blue-rain',
        GRAY_40: 'button--color-gray-40',
        INHERITED: 'button--color-inherited'
    }
};

const defaultProps = {
    color: Color.Palette.PRIMARY,
    type: Type.FILLED,
    size: Size.MEDIUM,
    narrow: true,
    light: false
};

function Button (props) {
    const {
        id,
        icon,
        text,
        type,
        size,
        color,
        narrow,
        light,
        ignoreTriggers,
        isRealButton,
        isDisabled,
        isHovered,
        isPressed,
        isLoading,
        href,
        openInBlank,
        onClick
    } = props;

    const classnames = {
        block: classNames({
            'button': true,
            [ type ]: type,
            [ size ]: size,
            [ color ]: color,
            'button--narrow': narrow,
            'button--light': light,
            'button--icon-only': icon && !text,
            'is-hovered': isHovered && !isDisabled,
            'is-pressed': (isPressed && !isDisabled) || isLoading,
            'is-loading': isLoading,
            'is-disabled': isDisabled,
            'trigger-ignore': ignoreTriggers,
            'trigger-icon-hover': true
        }),
        inner: 'button__inner',
        content: 'button__content',
        icon: 'button__icon',
        text: 'button__text',
        loader: classNames({
            'button__loader': true
        })
    };

    let ButtonTag = 'div';
    if (!!href) {
        ButtonTag = Link;
    } else if (isRealButton) {
        ButtonTag = 'button';
    }

    return (
        <ButtonTag
            id={id}
            className={classnames.block}
            disabled={isRealButton && isDisabled ? 'disabled' : null}
            role={href ? '' : 'button'}
            to={!isDisabled ? href : null}
            onClick={!isDisabled ? onClick : null}
            target={openInBlank ? '_blank' : null}
        >
            <span className={classnames.content}>
                {icon ? (
                    <span className={classnames.icon}>
                        {icon}
                    </span>
                ) : null}

                {text ? (
                    <span className={classnames.text}>
                        <Text inline={true}>{text}</Text>
                    </span>
                ) : null}
            </span>
            {isLoading ? (
                <span className={classnames.loader}>
                    <Loader/>
                </span>
            ) : null}
        </ButtonTag>
    );
}

Button.Type = Type;
Button.Size = Size;
Button.Color = Color;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
