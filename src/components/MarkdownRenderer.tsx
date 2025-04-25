import ReactMarkdown, { Components } from 'react-markdown';
import { Heading, Text, Link, Code, ListItem, UnorderedList, OrderedList } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

type MarkdownRendererProps = {
  content: string;
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const customStyle = {
    backgroundColor: '#2d2d2d', // Наприклад, темний фон
    padding: '20px', // Відступи
    borderRadius: '8px', // Округлі кути
  };
  const renderers: Components = {
    h1: ({ children }) => (
      <Heading as="h1" size="xl" my={4}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="lg" my={4}>
        {children}
      </Heading>
    ),
    p: ({ children }) => <Text my={2}>{children}</Text>,
    a: ({ href, children }) => (
      <Link href={href} color="teal.500" isExternal>
        {children}
      </Link>
    ),
    code: ({ node, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');

      // Якщо це блоковий код
      if (match) {
        return (
          <SyntaxHighlighter
            // @ts-ignore
            style={atomDark as React.CSSProperties}
            language={match[1]}
            customStyle={customStyle}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }

      // Якщо це inline код
      return (
        <Code colorScheme="yellow" p={1} borderRadius="md" {...props}>
          {children}
        </Code>
      );
    },
    li: ({ children }) => <ListItem>{children}</ListItem>,
    ul: ({ children }) => <UnorderedList ml={4}>{children}</UnorderedList>,
    ol: ({ children }) => (
      <OrderedList ml={4} my={2}>
        {children}
      </OrderedList>
    ),
  };

  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={renderers}
    />
  );
};

export default MarkdownRenderer;
