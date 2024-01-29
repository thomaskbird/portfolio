import SyntaxHighlighter from 'react-syntax-highlighter';
import MonokaiSublime from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai-sublime';

type CodeType = {
  children: any;
}

const Code = ({
  children,
}: CodeType) => {
  return (
    <SyntaxHighlighter language="javascript" style={MonokaiSublime}>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code;