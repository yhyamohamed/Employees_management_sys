import React from "react";

const ListAllUsers = () => {
  const { data, isPending, error } = useGet("http://127.0.0.1:8000/users");

  return (
    <div className="row">
      {isPending && (
        <>
          <div className="alert alert-primary" role="alert">
            <span
              className="spinner-border text-info spinner-border-m me-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </span>
            Getting Data pleas wait!
          </div>
        </>
      )}
      {error && (
        <>
          <div className="alert alert-danger" role="alert">
            we'r sry , {error} ..pls try again later!
          </div>
        </>
      )}
      {artistsList &&
        artistsList.map((artist) => (
          <div
            className="card col-3 m-2 border border-primary border-2"
            key={artist.id}
          >
            <img
              src={`/images/covers/${artist.cover}.jpg`}
              className="card-img-top"
              alt="artist pic"
            />
            <div className="card-body">
              <h5 className="card-title">{artist.name}</h5>
              <p className="card-text">
                {artist.bio.split(" ").slice(0, 7).join(" ")}...
                <span className="text-primary">Read more</span>
              </p>
              <Link to={`/artists/${artist.id}`} className="btn btn-primary">
                Show Details
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListAllUsers;
