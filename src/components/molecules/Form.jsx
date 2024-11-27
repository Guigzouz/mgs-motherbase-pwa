import { Container, Input } from "../atoms";

const Form = ({ configs }) => {
  return (
    <Container.Menu
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      {configs.map((config, i) => (
        <Input.Base
          key={i}
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            fontFamily: "redensek",
            borderRadius: "6px",
            border: "1px solid #ddd",
            outline: "none",
            transition: "all 0.2s ease",
            backgroundColor: "white",
          }}
          placeholder={config.placeholder}
          required={config.required}
          type={config.type}
          name={config.name}
          value={config.value}
          onChange={(e) => {
            config.onChange(e, config.name);
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4a90e2")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />
      ))}
      {/* <div>{config.name}</div> */}
    </Container.Menu>
  );
};

export default Form;
