import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RichText = (props) => {
    return (
        <>
            <Editor
                onInit={(evt, editor) => props.editorRef.current = editor} 
                textareaName={props.name}
                apiKey='xdik3usm3q594tuf4vbopn7i0e7h9xfizym9r2mw6f3gsmue'
                initialValue={props.value}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                        'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | casechange blocks | bold italic backcolor | link image ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
                }}
                onChange={props.change}
            />

        </>

    );
};

export default RichText;