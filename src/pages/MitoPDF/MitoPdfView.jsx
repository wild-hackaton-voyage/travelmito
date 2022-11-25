import "./MitoPdf.css";

const MItoPdfView = ({
  handleDestination,
  destination,
  ticket,
  setTicket,
  cityName,
  setCityName,
  cityCode,
  setCityCode,
}) => {
  console.log(cityCode, "cityCode");
  return (
    <div>
      <div className="page">
        {/* <h1 id="headerTicket">Ton MitoTicket</h1> */}
        <div className="ticketCard2">
          <h3 id="cityTicket2" style={{ display: "block" }}>
            {cityName}{" "}
          </h3>
          <h1 id="cityCode2" style={{ display: "block" }}>
            {cityCode}
          </h1>
          <img src={ticket} alt="2" id="ticket2" />;
        </div>
      </div>
    </div>
  );
};
export default MItoPdfView;
