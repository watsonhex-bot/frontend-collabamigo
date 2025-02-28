import React from "react";
import Modal from "react-bootstrap/Modal";
import 'react-bootstrap';
import * as styles from './accountchooser.module.css';

export default function AccountChooser() {
    const clubList = [
        'Club 1',
        'Club 2',
        'Club 3',
        'Club 4',
        'Club 5',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
        'Club 6',
    ]

    const clubListItems = clubList.map((club) => (
        <li key={club.id}>
            {club}
        </li>
    ));

    return (
        <Modal.Dialog>
            <div className="my-4 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between w-50 mx-auto align-items-center">
                    <img
                        alt="Profile Image"
                        className="rounded-circle"
                        src="https://via.placeholder.com/100x100"
                    />

                    <p className="d-flex flex-column">
                        <h3>
                            Full Name
                        </h3>

                        <span className={styles.manageSpan}>
                            Manage Profile
                        </span>
                    </p>
                </div>

                <div className={styles.clubManage}>
                    <h5 className="d-flex align-items-center justify-content-center">
                        Club Management
                    </h5>

                    <div className={styles.clubScroll}>
                        <ul className={styles.clubNames}>
                            {clubListItems}
                        </ul>
                    </div>
                </div>

                <button
                    className={styles.signoutBtn}
                    type="button"
                >
                    Sign Out
                </button>
            </div>
        </Modal.Dialog>)
}
