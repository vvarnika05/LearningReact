

export default function PropertyList({ properties }) {
    return (
        <>
            {properties.map((p) => (
                <div className="divs row" key={p.name}>
                    <h2>{p.name}</h2>
                    <h3>${p.price} a night</h3>
                    <h4>{p.rating} ⭐️</h4>
                </div>
            ))}
        </>

    );
}