import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgCollection: '',
            itemSavedResponse:'',
        }
    }

    onFileChange(e) {
        console.log('From file change :>> ',e.target.files)
        this.setState({ imgCollection: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()
        

        var formData = new FormData();
        let key;
        for (key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        axios.post("/api/upload-images", formData, {
        }).then(res => {
            this.setState({itemSavedResponse:res.data.massage})
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                    <div><strong>{this.state.itemSavedResponse}</strong></div>
                </div>
            </div>
        )
    }
}