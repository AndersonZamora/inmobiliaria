
export const VideoPlayer = () => {
    return (
        <div className="video-container flex justify-center">
            <video controls>
                <source src="/videos/video-laguna-san-nicolas-01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
