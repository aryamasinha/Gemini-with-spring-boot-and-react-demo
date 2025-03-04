const ChatResponse = ({ response }) => {
    if (!response) {
        return null;
    }
    const {candidates, usageMetadata } = response;
    return (
        <div className="container my-4">
            <h3>Response</h3>
        {candidates.map((candidate, index) => (
            <div className="card mb-3" key={index}>
            <div className="card-body">
              <p className="card-text">{candidate.content.parts[0].text}</p>
            </div>
          </div>
        ))}
        </div>
    )
}

export default ChatResponse;