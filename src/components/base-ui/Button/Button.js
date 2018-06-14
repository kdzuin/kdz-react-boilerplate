import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';
import { Text } from '../Typography';
import Loader from '../Loader/Loader';
import Helpers from '../../common/Helpers';

const Size = {
    SMALL: 'sm',
    MEDIUM: 'md',
    LARGE: 'lg',
    XLARGE: 'xlg'
};

const Type = {
    FILLED: 'filled',
    STROKE: 'stroke',
    TRANSPARENT: 'transparent',
    MONOCHROME: 'monochrome'
};

const Color = {
    Palette: {
        PRIMARY: 'primary',
        RED_CARROT: 'red-carrot',
        PINK_ROSE: 'pink-rose',
        YELLOW_SUN: 'yellow-sun',
        GREEN_DEW: 'green-dew',
        GREEN_GRASS: 'green-grass',
        PURPLE_LAVANDA: 'purple-lavanda',
        BLUE_SKY: 'blue-sky',
        BLUE_RAIN: 'blue-rain',
        GRAY_40: 'gray-40',
        WHITE: 'white',
        INHERITED: 'inherited'
    }
};

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
    /** Button Type from Button.Type enum (```Button.Type.FILLED```) */
    type: PropTypes.oneOf(Object.values(Helpers.flatten(Type))),
    /** Button Size from Button.Size enum (```Button.Size.MEDIUM```) */
    size: PropTypes.oneOf(Object.values(Helpers.flatten(Size))),
    /** ```Button.Color.Palette.PRIMARY``` */
    color: PropTypes.oneOf(Object.values(Helpers.flatten(Color))),
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
    /** Click event handler */
    onClick: PropTypes.func,
    /** Flag to disable CSS triggers */
    ignoreTriggers: PropTypes.bool
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
        onClick
    } = props;

    const classnames = {
        block: classNames({
            'button': true,
            [ `button--type-${type}` ]: type,
            [ `button--size-${size}` ]: size,
            [ `button--color-${color}` ]: color,
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
    if (isRealButton) {
        ButtonTag = 'button';
    }

    return (
        <ButtonTag
            id={id}
            className={classnames.block}
            disabled={isRealButton && isDisabled ? 'disabled' : null}
            role="button"
            onClick={!isDisabled ? onClick : null}
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
