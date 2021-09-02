/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class DynamicCard extends Component {
    static propTypes = {
        element: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.handlechangemodalshow = this.handlechangemodalshow.bind(this);
        this.state = {modalshow: false,btnavail:true}
    }

    handler(event){
        this.handlechangebtnavail(event);
    }

    handlechangebtnavail(event) {
        this.setState({btnavail: !this.state.btnavail})
    }

    handlechangemodalshow(event) {
        this.setState({modalshow: !this.state.modalshow})
    }

    render() {
        console.log(this.props.element, " hiiii")
        if(this.props.element === undefined) {
            return null;
        }
        else{
        return (
            <div className="col-sm-6 col-lg-4 mb-3">
                <div className=" mb-3 h-100">

                    <div className="">
                        
                        <Image
                            className="logo"
                            fluid
                            src={this.props.element.logo}
                        />

                        <h5 className="">
                            {this.props.element.name}
                        </h5>

                    </div>
                </div>
            </div>
            )
        }
    }
}

function Boxes({ boxesToRender }) {
    console.log(boxesToRender, " is post")
    if(boxesToRender === undefined){return null;}
    else if(boxesToRender.length === 0){return null;}
    else{
    return (
        <div className="container">
            <div className="row">
                {boxesToRender.map((boxdata, index) => (
                    <DynamicCard element={boxdata} />
                    ))}
            </div>
        </div>
        );
    }
}

export default class Clublist extends Component {
    static propTypes = {
        clubList: PropTypes.array.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            boxToShow: [],
            next:3,
            arrayForHoldingboxes : [],
            boxesPerPage: 3
        }
        this.loopWithSlice = this.loopWithSlice.bind(this);
        this.handleShowMoreboxes = this.handleShowMoreboxes.bind(this);
    }

    loopWithSlice(start, end){
        this.setState({arrayForHoldingboxes:this.state.arrayForHoldingboxes.concat(this.props.clubList.slice(start, end))})
        this.setState({boxesToShow:this.state.arrayForHoldingboxes})
      }

    componentDidMount() {
        this.loopWithSlice(0, this.state.boxesPerPage);
    }

    handleShowMoreboxes(){
        this.loopWithSlice(this.state.next, this.state.next + this.state.boxesPerPage);
        this.setState({next:this.state.next + this.state.boxesPerPage});
    }


    render() {
        console.log(this.props.clubList, "ewww")
        return (
            <div>
                {this.props.clubList.length>0 ?
                    <Boxes boxesToRender={this.state.arrayForHoldingboxes} />
                    : null}

                <Button onClick={this.handleShowMoreboxes}>
                    Load more
                </Button>
            </div>
        )
    }
}
