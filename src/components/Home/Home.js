import React from 'react';
import {reduxForm, Field} from 'redux-form';

class Home extends React.Component {
    // Common method to render Input
    renderInput =(fieldProps) =>{
        return (
            <div className="field">
                <label>{fieldProps.label}</label>
                <input {...fieldProps.input}/>
                <span style={{color : 'red'}}>{fieldProps.meta.touched && fieldProps.meta.error}</span>
            </div>
        );
    }

    // method to validate required field
    required = (value) =>{
        return value === "" || value === undefined ? "This field is required...!!!" : undefined;
    }

    // Form submit handler, Currently we are simply navigating to Map's component.
    // Navigation will happen only if user have provided some data for both the fields.
    onSubmit = (formData) => {
        // this.props.history.push(`/map/${formData.deviceId}/${formData.sensorId}`)
        this.props.history.push(`/ParkingLot/${formData.deviceId}`)
    }

    render(){
        return(
            <div className="info-collection-form">
                <h2>Track location of your device</h2>
                <h6>Sample Device Id :: 4d872a60f3f17a6a02a27fa72d303a34</h6>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="deviceId" component={this.renderInput} label="Device_ID" validate={[this.required]}/>
                    <Field name="sensorId" component={this.renderInput} label="Sensor_ID" validate={[this.required]}/>
                    <button type="submit" className="ui green button" disabled={this.props.submitting}>Track Device</button>
                    <button type="button" className="ui red button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Clear Values</button>
                </form>
            </div>
        );
    }
    
}

export default reduxForm({form : 'streamForm', destroyOnUnmount: true})(Home);