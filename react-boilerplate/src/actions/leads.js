import axios from "axios";
import { GET_LEAD, DELETE_LEAD, ADD_LEAD } from "./types";

// CSRF Token Protection
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

// GET LEADS
export const getLeads = () => (dispatch) => {
    axios
        .get("http://127.0.0.1:8000/api/list-add")
        .then((res) => {
            dispatch({
                type: GET_LEAD,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

// DELETE LEAD
export const deleteLead = (id) => (dispatch) => {
    axios
        .delete(`http://127.0.0.1:8000/api/item/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
            },
            body: {}
        })
        .then((res) => {
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};

// ADD LEAD
export const addLead = (lead) => (dispatch) => {
    axios
        .post("http://127.0.0.1:8000/api/list-add", lead)
        .then((res) => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
