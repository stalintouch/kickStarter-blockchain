import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/layout';

class RequestNew extends Component {

  state={
    value:'',
    description: '',
    receipent:'',
    loading: false,
    errorMessage: ''
  }

  static async getInitialProps(props){
    const {address} = props.query;

    return { address };
  }

  onSubmit = async (e) =>{

    e.preventDefault();
    
    const campaign = Campaign(this.props.address);
    const { description,value,receipent} = this.state;

    this.setState({loading:true, errorMessage:''})
    
    try{
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), receipent).send({
        from: accounts[0]
      });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`)
    } catch(err){
      this.setState({errorMessage: err.message})
    }

    this.setState({loading: false})
  }

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
          Back
          </a>
        </Link>
        <h1>Create a Requests</h1>
        <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
          <Form.Field>
            <label value={this.state.description} onChange={e => this.setState({description: e.target.value})}>Description</label>
            <Input />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input value={this.state.value} onChange={e => this.setState({value: e.target.value}) } />
          </Form.Field>
          <Form.Field>
            <label>Receipient</label>
            <Input value={this.state.receipent} onChange={e => this.setState({receipent: e.target.value})} />
          </Form.Field>
          <Message error header="oppsss" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary> Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
