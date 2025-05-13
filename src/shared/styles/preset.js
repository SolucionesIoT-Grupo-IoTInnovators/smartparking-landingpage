import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const myColorScheme = {
    light: {
        buttonColor: '#000',
        buttonHoverColor: '#000',
        buttonActiveColor: '#000',

        buttonBackground: '#074290',
        buttonHoverBackground: '#0054bf',
        buttonActiveBackground: '#0067f6',

        buttonBorderColor: '#074290',
        buttonHoverBorderColor: '#0054bf',
        buttonActiveBorderColor: '#0067f6',


        buttonSecondaryColor: '#FFF',
        buttonSecondaryHoverColor: '#FFF',
        buttonSecondaryActiveColor: '#FFF',

        buttonSecondaryBackground: '#111',
        buttonSecondaryHoverBackground: '#111',
        buttonSecondaryActiveBackground: '#111',

        buttonSecondaryBorderColor: '#111',
        buttonSecondaryHoverBorderColor: '#111',
        buttonSecondaryActiveBorderColor: '#111',



        inputColor: '#000000',
        inputBackground: '#fff',
        inputBorderColor: '#e5e5e5',

        inputFilledBackground: '#fff',
        inputFilledFocusBackground: '#f8f8f8',

        inputDisabledBackground: '#999',
        inputDisabledColor: '#666',

        inputFocusBorderColor: '#0067f6',
        inputInvalidBorderColor: '#ff0000',
        inputInvalidBackground: '#FF00004C',

        focusRing: {
            color: '{primary.color}',
            shadow: 'none'
        }
    },
    dark: {
        buttonColor: '#000',
        buttonHoverColor: '#000',
        buttonActiveColor: '#000',

        buttonBackground: '#074290',
        buttonHoverBackground: '#0054bf',
        buttonActiveBackground: '#0067f6',

        buttonBorderColor: '#074290',
        buttonHoverBorderColor: '#0054bf',
        buttonActiveBorderColor: '#0067f6',


        buttonSecondaryColor: '#FFF',
        buttonSecondaryHoverColor: '#FFF',
        buttonSecondaryActiveColor: '#FFF',

        buttonSecondaryBackground: '#111',
        buttonSecondaryHoverBackground: '#111',
        buttonSecondaryActiveBackground: '#111',

        buttonSecondaryBorderColor: '#111',
        buttonSecondaryHoverBorderColor: '#111',
        buttonSecondaryActiveBorderColor: '#111',
        
        

        inputColor: '#000000',
        inputBackground: '#fff',
        inputBorderColor: '#e5e5e5',

        inputFilledBackground: '#fff',
        inputFilledFocusBackground: '#f8f8f8',

        inputDisabledBackground: '#999',
        inputDisabledColor: '#666',

        inputFocusBorderColor: '#0067f6',
        inputInvalidBorderColor: '#ff0000',
        inputInvalidBackground: '#FF00004C',

        focusRing: {
            color: '{primary.color}',
            shadow: 'none'
        }
    }
}

const MyPreset = definePreset(Aura, {
    components: {
        button: {
            colorScheme: {
                light: {
                    text: {
                        primary: {
                            hoverBackground: '{primary.50}',
                            activeBackground: '{primary.100}',
                            color: '{primary.color}'
                        },
                        secondary: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            color: '{surface.500}'
                        },
                        success: {
                            hoverBackground: '{green.50}',
                            activeBackground: '{green.100}',
                            color: '{green.500}'
                        },
                        info: {
                            hoverBackground: '{sky.50}',
                            activeBackground: '{sky.100}',
                            color: '{sky.500}'
                        },
                        warn: {
                            hoverBackground: '{orange.50}',
                            activeBackground: '{orange.100}',
                            color: '{orange.500}'
                        },
                        help: {
                            hoverBackground: '{purple.50}',
                            activeBackground: '{purple.100}',
                            color: '{purple.500}'
                        },
                        danger: {
                            hoverBackground: '{red.50}',
                            activeBackground: '{red.100}',
                            color: '{red.500}'
                        },
                        plain: {
                            hoverBackground: 'transparent',
                            activeBackground: 'transparent',
                            color: '#fff'
                        }
                    },
                    outlined: {
                        primary: {
                            hoverBackground: '{primary.50}',
                            activeBackground: '{primary.100}',
                            borderColor: '{primary.200}',
                            color: '{primary.color}'
                        },
                        secondary: {
                            hoverBackground: '#00000006',
                            activeBackground: '#00000010',
                            borderColor: '#000',
                            color: '#000'
                        },
                        success: {
                            hoverBackground: '{green.50}',
                            activeBackground: '{green.100}',
                            borderColor: '{green.200}',
                            color: '{green.500}'
                        },
                        info: {
                            hoverBackground: '{sky.50}',
                            activeBackground: '{sky.100}',
                            borderColor: '{sky.200}',
                            color: '{sky.500}'
                        },
                        warn: {
                            hoverBackground: '{orange.50}',
                            activeBackground: '{orange.100}',
                            borderColor: '{orange.200}',
                            color: '{orange.500}'
                        },
                        help: {
                            hoverBackground: '{purple.50}',
                            activeBackground: '{purple.100}',
                            borderColor: '{purple.200}',
                            color: '{purple.500}'
                        },
                        danger: {
                            hoverBackground: '{red.50}',
                            activeBackground: '{red.100}',
                            borderColor: '{red.200}',
                            color: '{red.500}'
                        },
                        contrast: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            borderColor: '{surface.700}',
                            color: '{surface.950}'
                        },
                        plain: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            borderColor: '{surface.200}',
                            color: '{surface.700}'
                        }
                    },

                    primary: {
                        color: myColorScheme.light.buttonColor,
                        hoverColor: myColorScheme.light.buttonHoverColor,
                        activeColor: myColorScheme.light.buttonActiveColor,

                        background: myColorScheme.light.buttonBackground,
                        hoverBackground: myColorScheme.light.buttonHoverBackground,
                        activeBackground: myColorScheme.light.buttonActiveBackground,

                        borderColor: myColorScheme.light.buttonBorderColor,
                        hoverBorderColor: myColorScheme.light.buttonHoverBorderColor,
                        activeBorderColor: myColorScheme.light.buttonActiveBorderColor,

                        focusRing: myColorScheme.light.focusRing
                    },
                    secondary: {
                        color: myColorScheme.light.buttonSecondaryColor,
                        hoverColor: myColorScheme.light.buttonSecondaryHoverColor,
                        activeColor: myColorScheme.light.buttonSecondaryActiveColor,

                        background: myColorScheme.light.buttonSecondaryBackground,
                        hoverBackground: myColorScheme.light.buttonSecondaryHoverBackground,
                        activeBackground: myColorScheme.light.buttonSecondaryActiveBackground,

                        borderColor: myColorScheme.light.buttonSecondaryBorderColor,
                        hoverBorderColor: myColorScheme.light.buttonSecondaryHoverBorderColor,
                        activeBorderColor: myColorScheme.light.buttonSecondaryActiveBorderColor
                    }
                },
                dark: {
                    primary: {
                        color: myColorScheme.dark.buttonColor,
                        hoverColor: myColorScheme.dark.buttonHoverColor,
                        activeColor: myColorScheme.dark.buttonActiveColor,

                        background: myColorScheme.dark.buttonBackground,
                        hoverBackground: myColorScheme.dark.buttonHoverBackground,
                        activeBackground: myColorScheme.dark.buttonActiveBackground,

                        borderColor: myColorScheme.dark.buttonBorderColor,
                        hoverBorderColor: myColorScheme.dark.buttonHoverBorderColor,
                        activeBorderColor: myColorScheme.dark.buttonActiveBorderColor,


                        focusRing: myColorScheme.dark.focusRing
                    },
                    secondary: {
                        color: myColorScheme.dark.buttonSecondaryColor,
                        hoverColor: myColorScheme.dark.buttonSecondaryHoverColor,
                        activeColor: myColorScheme.dark.buttonSecondaryActiveColor,

                        background: myColorScheme.dark.buttonSecondaryBackground,
                        hoverBackground: myColorScheme.dark.buttonSecondaryHoverBackground,
                        activeBackground: myColorScheme.dark.buttonSecondaryActiveBackground,

                        borderColor: myColorScheme.dark.buttonSecondaryBorderColor,
                        hoverBorderColor: myColorScheme.dark.buttonSecondaryHoverBorderColor,
                        activeBorderColor: myColorScheme.dark.buttonSecondaryActiveBorderColor
                    }
                }
            }
        },
        inputtext:{
            colorScheme: {
                light: {
                    color: myColorScheme.light.inputColor,
                    borderColor: myColorScheme.light.inputBorderColor,
                    background: myColorScheme.light.inputBackground,

                    filledBackground: myColorScheme.light.inputFilledBackground,
                    filledFocusBackground: myColorScheme.light.inputFilledFocusBackground,

                    disabledColor: myColorScheme.light.inputDisabledColor,
                    disabledBackground: myColorScheme.light.inputBackground,

                    focusBorderColor: myColorScheme.light.inputFocusBorderColor,
                    invalidBorderColor: myColorScheme.light.inputInvalidBorderColor,
                    invalidBackground: myColorScheme.light.inputInvalidBackground
                },
                dark: {
                    color: myColorScheme.dark.inputColor,
                    borderColor: myColorScheme.dark.inputBorderColor,
                    background: myColorScheme.dark.inputBackground,

                    filledBackground: myColorScheme.dark.inputFilledBackground,
                    filledFocusBackground: myColorScheme.dark.inputFilledFocusBackground,
                    
                    disabledColor: myColorScheme.dark.inputDisabledColor,
                    disabledBackground: myColorScheme.dark.inputBackground,

                    focusBorderColor: myColorScheme.dark.inputFocusBorderColor,
                    invalidBorderColor: myColorScheme.dark.inputInvalidBorderColor,
                    invalidBackground: myColorScheme.dark.inputInvalidBackground
                }
            }
        },
        inputnumber: {
            button: {
                width: '1rem',
                borderRadius: '{form.field.border.radius}',
                verticalPadding: '{form.field.padding.y}'
            },
            colorScheme: {
                light: {
                    color: myColorScheme.light.inputColor,
                    borderColor: myColorScheme.light.inputBorderColor,
                    background: myColorScheme.light.inputBackground,

                    filledBackground: myColorScheme.light.inputFilledBackground,
                    filledFocusBackground: myColorScheme.light.inputFilledFocusBackground,

                    disabledColor: myColorScheme.light.inputDisabledColor,
                    disabledBackground: myColorScheme.light.inputDisabledBackground,

                    focusBorderColor: myColorScheme.light.inputFocusBorderColor,
                    invalidBorderColor: myColorScheme.light.inputInvalidBorderColor,
                    invalidBackground: myColorScheme.light.inputInvalidBackground
                },
                dark: {
                    color: myColorScheme.dark.inputColor,
                    borderColor: myColorScheme.dark.inputBorderColor,
                    background: myColorScheme.dark.inputBackground,

                    filledBackground: myColorScheme.dark.inputFilledBackground,
                    filledFocusBackground: myColorScheme.dark.inputFilledFocusBackground,

                    disabledColor: myColorScheme.dark.inputDisabledColor,
                    disabledBackground: myColorScheme.dark.inputDisabledBackground,

                    focusBorderColor: myColorScheme.dark.inputFocusBorderColor,
                    invalidBorderColor: myColorScheme.dark.inputInvalidBorderColor,
                    invalidBackground: myColorScheme.dark.inputInvalidBackground
                }
            }
        },
        carousel: {
            colorScheme: {
                light: {
                    indicator: {
                        background: myColorScheme.light.inputDisabledBackground,
                        hoverBackground: myColorScheme.light.inputDisabledColor,
                        activeBackground: myColorScheme.light.buttonColor
                    }
                },
                dark: {
                    indicator: {
                        background: myColorScheme.dark.inputDisabledBackground,
                        hoverBackground: myColorScheme.dark.inputDisabledColor,
                        activeBackground: myColorScheme.dark.buttonColor
                    }
                }
            }
        },
        progressspinner: {
            colorScheme: {
                light: {
                    root: {
                        'color.1': myColorScheme.light.buttonBackground,
                        'color.2': myColorScheme.light.buttonBackground,
                        'color.3': myColorScheme.light.buttonBackground,
                        'color.4': myColorScheme.light.buttonBackground,
                    }
                },
                dark: {
                    root: {
                        'color.1': myColorScheme.dark.buttonBackground,
                        'color.2': myColorScheme.dark.buttonBackground,
                        'color.3': myColorScheme.dark.buttonBackground,
                        'color.4': myColorScheme.dark.buttonBackground,
                    }
                }
            }
        },
        select: {
            colorScheme: {
                light: {
                    disabledBackground: myColorScheme.light.inputBackground,
                },
                dark: {
                    disabledBackground: myColorScheme.light.inputBackground,
                }
            }
        }
    },
    semantic: {
        transitionDuration: '0s',
        focusRing: {
            width: '2px',
            style: 'solid',
            color: '{primary.color}',
            offset: '2px',
            shadow: 'none'
        },
        iconSize: '1rem',
        anchorGutter: '0',
        primary: {
            50: '#bfd9f6',
            100: '#6aa5f3',
            200: '#3385f1',
            300: '#0e65d5',
            400: '#0a54b3',
            500: '#074290',
            600: '#053578',
            700: '#042960',
            800: '#031e47',
            900: '#010d23',
            950: '#010b1b'
        }
    }
});

export default MyPreset;