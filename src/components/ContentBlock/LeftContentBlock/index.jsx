/*  eslint-disable react/prop-types */

import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { SvgIcon } from "common/SvgIcon";
import {
    LeftContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
} from "./styles";
import GoogleSignIn from "components/GoogleSignIn";
import DummySignIn from "../../DummySignIn";


function LeftContentBlock({
    alt_content,
    alt_title,
    icon,
    title,
    content,
    section,
    t,
    id,
}) {
    const [stage, setStage] = useState("button");

    return (
        <LeftContentSection className={(stage === "form") ? "p-0" : ""}>
            <div
                align="middle"
                className="row justify-content-center"
                id={id}
            >
                <div
                    className="col-lg-6 col-md-11 col-sm-12"
                >
                    <SvgIcon
                        height="100%"
                        src={icon}
                        width="100%"
                    />
                </div>

                <div
                    className="col-lg-6 col-md-11 col-sm-12"
                >
                    <ContentWrapper>
                        <h6 className="text-left">
                            {(stage === "button") ? (title) : (alt_title)}
                        </h6>

                        <Content className={"text-left " + ((stage === "form") ? "h1 fw-bold" : null)}>
                            {(stage === "button") ? (content) : (alt_content)}
                        </Content>

                        <ServiceWrapper>
                            <Row justify="space-between">
                                {typeof section === "object" &&
                                        section.map((item, id) => {
                                            return (
                                                <Col
                                                    key={id.toString()}
                                                    span={11}
                                                >
                                                    <SvgIcon
                                                        height="60px"
                                                        src={item.icon}
                                                        width="60px"
                                                    />

                                                    <MinTitle>
                                                        {t(item.title)}
                                                    </MinTitle>

                                                    <MinPara>
                                                        {t(item.content)}
                                                    </MinPara>
                                                </Col>
                                            );
                                        })}
                            </Row>
                        </ServiceWrapper>
                    </ContentWrapper>

                    <GoogleSignIn
                        setStage={setStage}
                        stage={stage}
                        visibility
                    />

                    <br />

                    <DummySignIn />

                </div>
            </div>
        </LeftContentSection >
    );
}

export default LeftContentBlock;
