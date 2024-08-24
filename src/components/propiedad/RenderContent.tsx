
interface ContentJSJON {
    type: 'doc';
    content: []
}

interface Props {
    data: string
}

export const RenderContent = ({ data }: Props) => {

    const { content } = JSON.parse(data) as ContentJSJON;

    const renderNode = (node: any, key: number) => {
        if (node.content !== undefined) {
            switch (node.type) {
                case 'paragraph':
                    return (
                        <p key={key}>
                            {node.content.map((childNode: any, index: number) =>
                                renderText(childNode, index)
                            )}
                        </p>
                    );
                case 'bulletList':
                    return <ul key={key}>{node.content.map(renderListItem)}</ul>;
                case 'orderedList':
                    return <ol key={key}>{node.content.map(renderListItem)}</ol>;
                case 'listItem':
                    return <li key={key}>{node.content.map(renderNode)}</li>;
                case 'horizontalRule':
                    return <hr key={key} />;
                default:
                    return null;
            }
        } else if (node.type === 'paragraph') {
            return <p key={key}>&nbsp;</p>;
        }
        return null;
    };

    const renderText = (textNode: any, key: number) => {
        if (textNode.type === 'text') {
            let text: React.ReactNode = textNode.text;

            if (textNode.marks) {
                text = textNode.marks.reduce((acc: React.ReactNode, mark: any) => {
                    switch (mark.type) {
                        case 'bold':
                            return <strong key={key}>{acc}</strong>;
                        case 'italic':
                            return <em key={key}>{acc}</em>;
                        case 'strike':
                            return <s key={key}>{acc}</s>;
                        default:
                            return acc;
                    }
                }, text);
            }

            return <span key={key}>{text}</span>;
        }
        return null;
    };

    const renderListItem = (listItemNode: any, key: number) => {
        return <li key={key}>{listItemNode.content.map(renderNode)}</li>;
    };

    if (!content) {
        return null;
    }

    return <div>{content.map(renderNode)}</div>;
};
