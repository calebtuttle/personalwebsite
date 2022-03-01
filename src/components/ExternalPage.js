import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';

import TitleBar from './TitleBar';


const style = {
  fontSize: '1.2em'
};

function NotesPage() {
  return (
    <div >
      <TitleBar pageTitle="Articles Published Externally" />
      <br />
      
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>
            <div style={style} >
              <h4>Papers</h4>
              <p>
                <a href="https://doi.org/10.5281/zenodo.6320575" target="_blank">
                  An Active Inference Ontology for Decentralized Science: from Situated Sensemaking to the Epistemic Commons
                </a>
                <div style={{ fontSize: "0.8rem" }}>(Preprint. I contributed to the review of Web3 technologies used in DeSci.)</div>
              </p>
              <br />

              <h4>Blog Posts</h4>
              <p><a href="https://pulse.opsci.io/the-world-computers-hard-drive-swarm-24d3b47ef915" target="_blank">
                The World Computer’s Hard Drive: Swarm
              </a></p>
              <br />
              <p><a href="https://pulse.opsci.io/one-of-the-first-decentralized-cloud-storage-platforms-sia-477a82083a85" target="_blank">
                One of the First Decentralized Cloud Storage Platforms: Sia
              </a></p>
              <br />
              <p><a href="https://pulse.opsci.io/peer-to-peer-storage-without-a-blockchain-storj-256c190a85d7" target="_blank">
                Peer-to-Peer Storage without a Blockchain: Storj
              </a></p>
              <br />
              <p><a href="https://pulse.opsci.io/a-permanent-web-of-linked-data-arweave-3537b0a25cd6" target="_blank">
                A Permanent Web of Linked Data: Arweave
              </a></p>
              <br />
              <p><a href="https://pulse.opsci.io/engineering-incentives-for-data-storage-as-a-commodity-filecoin-c65308a2d743" target="_blank">
                Engineering Incentives for Data Storage as a Commodity: Filecoin
              </a></p>
              <br />
              <p><a href="https://pulse.opsci.io/decentralized-content-networks-for-a-permanent-science-data-commons-ipfs-9bf0dae73d3e" target="_blank">
                Decentralized Content Networks for a Permanent Science Data Commons: IPFS
              </a></p>
            </div>
          </Col>
          <Col xs={7}>
          </Col>
        </Row>
      </Grid> 
    </div>
  );
}


export default NotesPage;
