import React, { useState } from "react";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { marked } from "marked";
import DOMPurify from "dompurify";
import highlightjs from "highlight.js";
import "highlight.js/styles/github.css";

export const MarkdownEditor = () => {
    const [markdownValue, setMarkdownValue] = useState("Intial value");

    const onChange = (valeu) => {
        setMarkdownValue(valeu);
    };

    // return <SimpleMde value={markdownValue} onChange={onChange} />;

    return (
        <>
            <SimpleMde value={markdownValue} onChange={onChange} />;
            <div>
                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(markdownValue))}}></div>
            </div>
        </>
    )
};

export default MarkdownEditor;
