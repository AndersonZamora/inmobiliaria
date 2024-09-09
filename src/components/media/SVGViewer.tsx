interface Props {
    heig?: string;
}

export const SVGViewer = ({ heig = '600px' }: Props) => {
    return (
        <iframe
            src="/doc/plano-san-nicolas-02.pdf"
            width="100%"
            height={heig}
            style={{ border: 'none' }}
        />
    )
}
