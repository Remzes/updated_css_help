/**
 * Created by USALNVI on 17.04.2017.
 */

var triggers_object = {
    css_prop_obj: {
        width: "0px",
        padding: "0px",
        color: "rgb(0,0,0)",
        background_color: "transparent",
        letter_spacing: "0px",
        line_height: "0px",
        text_align: "center",
        text_decoration: "",
        text_transform: "",
        word_spacing: "0px",
        font_size: "0px",
        font_style: "default",
        font_weight: 400,
        font_variant: "default",
        box_shadow: {
            hshadow: 0,
            vshadow: 0,
            blur: 0,
            spread: 0,
            color: "transparent"
        },
        text_shadow: {
            hshadow: 0,
            vshadow: 0,
            blurRad: 0,
            color: "transparent"
        },
        border_radius: {
            left: "",
            right: "",
            top: "",
            bottom: ""
        },
        border: {
            left: "",
            right: "",
            top: "",
            bottom: ""
        },
        opacity: ""
    },
    css_DOM_elements_obj: {
        changed_element: $("#change-here"),
        colorpickers: {
            font_color: $("#customColor"),
            background_color: $("#customBColor"),
            box_shadow_color: $("#custom"),
            text_shadow_color: $("#tsColor"),
            border_color: {
                left_border: $("#clrzleftBord"),
                right_border: $("#clrzrightBord"),
                top_border: $("#clrztopBord"),
                bottom_border: $("#clrzbottomBord"),
                whole_border: $("#clrzallBord")
            }
        },
        triggers: {
            width: {
                span: $("#widthSpan"),
                change: {
                    main: $("#width"),
                    mode: $("#widthinput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            padding: {
                span: $("#paddingSpan"),
                change: {
                    main: $("#padding"),
                    mode: $("#paddinginput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            color_reset: {
                main: $("#resetColor"),
                mode: $("#cross_close_css_color")
            },
            background_color_reset: {
                main: $("#resetBgColor"),
                mode: $("#cross_close_css_background_color")
            },
            letter_spacing: {
                span: $("#letSpac"),
                change: {
                    main: $("#letterSpacingInput"),
                    mode: $("#css_letter_spacinginput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            line_height: {
                span: $("#linHei"),
                change: {
                    main: $("#lineHeightInput"),
                    mode: $("#css_line_heightinput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            text_alignment: {
                change: {
                    main: {
                        left: $("#left"),
                        right: $("#right"),
                        center: $("#center")
                    },
                    mode: {
                        select: $("#css_text_alignselect")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            text_decoration: {
                change: {
                    main: {
                        overline: $("#over"),
                        underline: $("#under"),
                        line_through: $("#through")
                    },
                    mode: {
                        overline: $("#overline"),
                        underline: $("#underline"),
                        line_through: $("#line-through")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            text_transform: {
                change: {
                    main: {
                        uppercase: $("#upper"),
                        lowercase: $("#lower"),
                        none: $("#none")
                    },
                    mode: {
                        select: $("#css_text_transformselect")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            word_spacing: {
                span: $("#wordSpac"),
                change: {
                    main: $("#wordSpacingInput"),
                    mode: $("#css_word_spacingselect")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            font_size: {
                span: $("#fonSi"),
                change: {
                    main: $("#fontSizeInput"),
                    mode: $("#css_font_sizeinput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            font_style: {
                change: {
                    main: {
                        italic: $("#italic"),
                        normal: $("#normalFS"),
                        oblique: $("#oblique")
                    },
                    mode: {
                        select: $("#css_font_styleselect")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            font_weight: {
                change: {
                    main: $("#fontWeightSelect"),
                    mode: $("#css_font_weightselect")
                },
                reset: {
                    main: "Add Button",
                    mode: "Choose 'Regular' option"
                }
            },
            font_variant: {
                change: {
                    main: {
                        small_caps: $("#smallCaps"),
                        default: $("#default")
                    },
                    mode: {
                        select: $("#css_font_variantselect")
                    }
                },
                reset: {
                    main: "On 'default' radio",
                    mode: "On 'default' radio"
                }
            },
            box_shadow: {
                spans: {
                    h_shadow_span: $("#hsRangeSpan"),
                    v_shadow_span: $("#vsRangeSpan"),
                    blur_span: $("#bRangeSpan"),
                    spread_span: $("#spRangeSpan")
                },
                main_change: {
                    h_shadow: $("#hsRange"),
                    v_shadow: $("#vsRange"),
                    blur: $("#bRange"),
                    spread: $("#spRange")
                },
                include: {
                    h_shadow: $("#hs"),
                    v_shadow: $("#vs"),
                    blur: $("#b"),
                    spread: $("#sp")
                },
                prefixes: {
                    usual: {
                        h_shadow: $("#bs_hsinput"),
                        v_shadow: $("bs_vsinput"),
                        blur: $("#bs_blurinput"),
                        spread: $("#bs_spreadinput")
                    },
                    moz: {
                        h_shadow: $("#moz_bs_hsinput"),
                        v_shadow: $("moz_bs_vsinput"),
                        blur: $("#moz_bs_blurinput"),
                        spread: $("#moz_bs_spreadinput")
                    },
                    webkit: {
                        h_shadow: $("#webkit_bs_hsinput"),
                        v_shadow: $("webkit_bs_vsinput"),
                        blur: $("#webkit_bs_blurinput"),
                        spread: $("#webkit_bs_spreadinput")
                    }
                },
                reset: {
                    main: $("#bsResetBtn"),
                    mode: "Add Button"
                },
                add: $("#boxShadowGen")
            },
            text_shadow: {
                spans: {
                    h_shadow: $("#hsTSRangeTSSpan"),
                    v_shadow: $("#vsTSRangeTSSpan"),
                    blur: $("#bTSRangeTSSpan")
                },
                change: {
                    main: {
                        h_shadow: $("#hsTSRange"),
                        v_shadow: $("#vsTSRange"),
                        blur: $("#bTSRange")
                    },
                    mode: {
                        h_shadow: $("#ts_hsinput"),
                        v_shadow: $("#ts_vsinput"),
                        blur: $("#ts_blurinput")
                    }
                },
                include: {
                    h_shadow: $("#hsTS"),
                    v_shadow: $("#vsTS"),
                    blur: $("#bTS")
                }
            },
            border: {
                left_border: {
                    span: $("#border-left-span"),
                    checkbox: $("#leftBord"),
                    size: $("#leftBordRange"),
                    type: $("#leftBordStyle")
                },
                right_border: {
                    span: $("#border-right-span"),
                    checkbox: $("#rightBord"),
                    size: $("#rightBordRange"),
                    type: $("#rightBordStyle")
                },
                top_border: {
                    span: $("#border-top-span"),
                    checkbox: $("#topBord"),
                    size: $("#topBordRange"),
                    type: $("#topBordStyle")
                },
                bottom_border: {
                    span: $("#border-bottom-span"),
                    checkbox: $("#bottomBord"),
                    size: $("#bottomBordRange"),
                    type: $("#bottomBordStyle")
                },
                all_side_border: {
                    span: $("#border-span"),
                    checkbox: $("#allBord"),
                    size: $("#allBordRange"),
                    type: $("#allBordStyle")
                }
            },
            border_radius: {
                spans: {
                    left_span: $("#borderLeftRadiusSpan"),
                    right_span: $("#borderRightRadiusSpan"),
                    top_span: $("#borderTopRadiusSpan"),
                    bottom_span: $("#borderBottomRadiusSpan"),
                    all_side_radius: $("#borderRadiusSpan")
                },
                main_change: {
                    left_border_radius: $("#borderLeftRadius"),
                    right_border_radius: $("#borderRightRadius"),
                    top_border_radius: $("#borderTopRadius"),
                    bottom_border_radius: $("#borderBottomRadius")
                },
                prefixes: {
                    usual: {
                        t_r: $("#t_r"),
                        r_r: $("#r_r"),
                        b_r: $("#b_r"),
                        l_r: $("#l_r")
                    },
                    moz: {
                        t_r: $("#moz_t_r"),
                        r_r: $("#moz_r_r"),
                        b_r: $("#moz_b_r"),
                        l_r: $("#moz_l_r")
                    },
                    webkit: {
                        t_r: $("#webkit_t_r"),
                        r_r: $("#webkit_r_r"),
                        b_r: $("#webkit_b_r"),
                        l_r: $("#webkit_l_r")
                    }
                },
                reset: {
                    reset_all: $("#reset_border_radius"),
                    reset_parts: $("#reset_parts")
                }
            },
            opacity: {
                spans: {
                    opacity_span: $("#allSpan"),
                    color_span: $("#cSpan"),
                    b_color_span: $("#bcSpan"),
                    bs_color_span: $("#bsSpan"),
                    ts_color_span: $("#tsSpan"),
                    all_side_border_span: $("#allBordSpan"),
                    left_border_span: $("#leftBordSpan"),
                    right_border_span: $("#rightBordSpan"),
                    bottom_border_span: $("#bottomBordSpan"),
                    top_border_span: $("#topBordSpan")
                },
                opacity_prop: $("#allRange"),
                color_opacity: $("#cRange"),
                b_color_opacity: $("#bcRange"),
                bs_color_opacity: $("#bsRange"),
                ts_color_opacity: $("#tsRange"),
                all_side_border_opacity: $("#allBordRangeOpacity"),
                left_border_opacity: $("#leftBordRangeOpacity"),
                right_border_opacity: $("#rightBordRangeOpacity"),
                bottom_border_opacity: $("#bottomBordRangeOpacity"),
                top_border_opacity: $("#topBordRangeOpacity")
            }
        },
        
    }
};



