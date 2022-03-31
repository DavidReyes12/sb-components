import "./myLabel.css";


export interface MyLabelProps {
    /**
    * This is the message that will be displayed on the label.
    */
    label: string;
    /**
    * The label size options
    */
    size: "normal" | "h1" | "h2" | "h3";
    /**
    * The label message is all capitalize
    */
    allCaps: boolean;
    /**
    * The label color options
    */
    color: "primary" | "secondary" | "tertiary";
    /**
    * Custom font color 
    */
    fontColor?: string;

};

export const MyLabel = ( { 
    allCaps = false,
    color = "primary",
    fontColor,
    label = "No Label", 
    size = "normal",
}: MyLabelProps ) => {
    return (
        <span
            className={`label ${ size } text-${ color }`}
            style={{ color: fontColor }}
        >
           { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
