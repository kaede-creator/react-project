import React, { useState } from "react";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { marked } from "marked";
import DOMPurify from "dompurify";
import highlightjs from "highlight.js";
import "highlight.js/styles/github.css";

export const MarkdownEditor = () => {
    // markedの設定を行う
    marked.setOptions({
        highlight:(code, lang) => {
            return highlightjs.highlightAuto(code,[lang]).value;
        }
    })

    const [markdownValue, setMarkdownValue] = useState("Intial value");

    const onChange = (value) => {
        setMarkdownValue(value);
    };

    // return <SimpleMde value={markdownValue} onChange={onChange} />;

    return (
        <>
            <SimpleMde value={markdownValue} onChange={onChange} />
            <p className="markDown_preview_title">プレビュー：</p>
            <div className="markDown_preview_wrap">
                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(markdownValue))}}></div>
            </div>
        </>
    )
};

export default MarkdownEditor;
