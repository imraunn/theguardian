import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../helper/Header";
import Navbar from "../helper/Navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { getSensitiveInfoDetails } from "../../actions/repo";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StickyHeadTable from "./Table3";
import ProgressProvider from "./ProgressProvider";
import "./style.css";

const SensitiveInfo = ({
  repo: { loading3, sensitive },
  getSensitiveInfoDetails,
}) => {
  const [repo, setRepo] = useState("");
  const [rows, setRows] = useState([]);
  const handleClick = () => {
    getSensitiveInfoDetails(repo);
  };
  useEffect(() => {
    if (sensitive && sensitive.leaks) {
        const arr=[];
        sensitive.leaks.forEach(x=>{
            const obj={
                name:x[0],
                sensitive:x[1]
            }
            arr.push(obj);
        })
        setRows(arr);
    }
  }, [sensitive]);
  return (
    <>
      <Container component='main' maxWidth='lg' sx={{ mt: 5 }}>
        {/* <div>Home</div> */}
        <h2 className="styled-text">Sensitive Info</h2>
        <Box
          className='styled_container'
          // style={{backgroundColor:"white",padding:"2rem", borderRadius:"0.7rem"}}
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label='Repository URL'
            id='fullWidth'
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
          />
          <Button
            sx={{ mt: 1 }}
            variant='contained'
            endIcon={<SendIcon />}
            onClick={handleClick}
            style={{ background: "#C6C6C6", color: "black" }}
          >
            Go
          </Button>
        </Box>
        {loading3 ? (
          <Spinner />
        ) : sensitive === null ? (
          <>
            <h3>Enter Github repository URL to scan for sensitive information</h3>
          </>
        ) : (
            sensitive.error? (
                <h3>{sensitive.error}</h3>
            ):(
                <>
                <h3>Here is your result</h3>
                <StickyHeadTable rows={rows} />
              </>
            )
        )}
      </Container>
    </>
  );
};

SensitiveInfo.protoTypes = {
  repo: PropTypes.object.isRequired,
  getSensitiveInfoDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  repo: state.repo,
});

export default connect(mapStateToProps, { getSensitiveInfoDetails })(
  SensitiveInfo
);
