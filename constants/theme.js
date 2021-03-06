import { Utils } from 'expo-ui-kit';
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const theme = {
    COLORS: {
        // base colors
        primary: "#0094FC",
        secondary: "#A3A1F7",
        tertiary: "#FFE358",

        // non-colors
        black: "#000020",
        white: "#FFFFFF",

        // color variations
        gray: "#535453",
        error: "#DC3545",
        warning: "#FFE358",
        success: "#4CD964",
        info: "#4DA1FF"
    },
    SIZES: {
        // global sizes
        base: 8,
        font: 16,
        radius: 30,
        padding: 26,

        // font sizes
        h1: 34,
        h2: 24,
        h3: 20,
        title: 16,
        subtitle: 14,
        caption: 12,
        small: 10,

        // app dimensions
        width,
        height
    } 
};

export default Utils.mergeTheme(Utils.theme, theme);