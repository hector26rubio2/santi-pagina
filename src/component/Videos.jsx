export const YoutubeEmbed = ({ dataUrl }) => {

	return (
		<div className="video-responsive">
			<iframe
				width="560"
				height="315"
				src={dataUrl}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	);
};
