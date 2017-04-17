/**
 * Created by USALNVI on 17.04.2017.
 */
var css_prop_obj = {
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
};

var css_DOM_elements_obj = {
    changed_element : $("#change-here"),
    colorpickers : {
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
            main: $("#width"),
            mode: $("#widthinput")
        },
        padding: {
            main: $("padding"),
            mode: $("#paddinginput")
        },
        color: {
            reset: $("#resetColor")
        },
        background_color: {
            reset: $("#resetBgColor")
        },
        letter_spacing: {
            change: $("#letterSpacingInput"),
            reset: "Add Button"
        },
        line_height: {
            change: $("#lineHeightInput"),
            reset: "Add Button"
        },
        text_alignment: {
            change: {
                left: $("#left"),
                right: $("#right"),
                center: $("#center")
            },
            reset: "Add Button"
        },
        text_decoration: {
            change: {
                overline: $("#overline"),
                underline: $("#underline"),
                line_through: $("#line-through")
            },
            reset: "Add Button"
        },
        
    }
};



