import { Button, Card } from '@mui/material';
import './styles.scss';
import Youtube from '@tiptap/extension-youtube';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import PropTypes from 'prop-types';
import Image from '@tiptap/extension-image';
import { useEffect, useRef } from 'react';

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  const widthRef = useRef(null);
  const heightRef = useRef(null);

  useEffect(() => {
    if (widthRef.current && heightRef.current) {
      widthRef.current.value = 640;
      heightRef.current.value = 480;
    }
  }, [widthRef.current, heightRef.current]);

  if (!editor) {
    return null;
  }

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL');

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, parseInt(widthRef.current.value, 10)) || 640,
        height: Math.max(180, parseInt(heightRef.current.value, 10)) || 480,
      });
    }
  };

  return (
    <>
      <Card>
        <Button id="add" onClick={addYoutubeVideo}>
          Add YouTube video
        </Button>
        <input
          id="width"
          type="number"
          min="320"
          max="1024"
          ref={widthRef}
          placeholder="width"
        />
        <input
          id="height"
          type="number"
          min="180"
          max="720"
          ref={heightRef}
          placeholder="height"
        />
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          code
        </Button>
        <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          clear marks
        </Button>
        <Button onClick={() => editor.chain().focus().clearNodes().run()}>
          clear nodes
        </Button>
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          paragraph
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }
        >
          h1
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
          }
        >
          h2
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
          }
        >
          h3
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
          }
        >
          h4
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
          }
        >
          h5
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
          }
        >
          h6
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          bullet list
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          ordered list
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          code block
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          blockquote
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          horizontal rule
        </Button>
        <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </Button>
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          undo
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          redo
        </Button>
        <Button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={
            editor.isActive('textStyle', { color: '#958DF1' })
              ? 'is-active'
              : ''
          }
        >
          purple
        </Button>
      </Card>
    </>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Image.configure({
    allowBase64: true,
  }),
  Youtube.configure({
    controls: false,
  }),
];

export default function TextEditor({ onChange, content }) {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
      onUpdate={(props) => {
        // eslint-disable-next-line react/prop-types
        onChange(props.editor.getHTML());
      }}
    ></EditorProvider>
  );
}

TextEditor.propTypes = {
  onChange: PropTypes.func,
  content: PropTypes.string,
};
