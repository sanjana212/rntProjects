import React from 'react';
import './Form3.css';
const Form3 = () => {
    return (
        <div>
            <div className="main">
                <div className="sub_main">
                    <p className="ac2_heading">NOMINATION नामांकन</p>

                    <div className="nomination_det">
                        <p>
                            <span className="nomination"> NOMINATION FORM DA-1</span> Nomination u/s 45 ZA read with section 56 of
                            the
                            Banking Regulation Act 1949, Rules 2(1) of the Cooperative
                            Banks (Nomination) Rules, 1985 in respect of Bank Deposit. I/We, <span className="Nom_nm"></span>
                        </p>

                        <p>
                            nominate the following person to whom in the event of my/our/minor's death, the amount of deposit,
                            particulars whereof are given below, may be retumed by
                            Janata Sahakari Bank Ltd., Pune Branch <span className="Nom_nm1"></span>
                        </p>
                    </div>

                    <div>
                        <table border="1" style={{ width: '100%' }}>
                            <thead>
                                <th style={{ width: '8%' }}>Nature of Deposit</th>
                                <th style={{ width: '8%' }}>Distinguishing No.</th>
                                <th style={{ width: '10%' }}>Additional details if any</th>
                                <th style={{ width: '15%' }}>Name</th>
                                <th style={{ width: '20%' }}>Address</th>
                                <th style={{ width: '15%' }}>Relationship with the depositor if any</th>
                                <th style={{ width: '10%' }}>Age</th>
                                <th style={{ width: '15%' }}>If nominee is a minor, his/her date of birth </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="nominee_details">
                        <p>
                            As the nominee is a minor on this date, l/We appoint Shri / Smt. / Kum <span
                                className="nominee_name"></span>
                        </p>

                        <p>
                            Age <span className="nom_age"></span>Address <span className="nom_add"></span>to receive the amount of the
                            deposit on behalf of the
                            nominee in the event of my/our minor's death during the minority of the nominee
                        </p>
                    </div>

                    <div>
                        <table className="table_sign" border="1" style={{ width: '100%' }}>
                            <tr>
                                <td colspan="4">Signature(s) / Thumb impression(s) of Deposit</td>
                            </tr>
                            <tr>
                                <td style={{ width: '25%' }}>Signature(s)</td>
                                <td style={{ width: '25%' }}>1)</td>
                                <td style={{ width: '25%' }}>2)</td>
                                <td style={{ width: '25%' }}>3)</td>
                            </tr>
                            <tr>
                                <td colspan="4">*Witness (es)</td>
                            </tr>
                        </table>
                        <table className="table_sign" border="1" style={{ width: '100%', borderTop: 'none !important' }}>
                            <tr>
                                <td style={{ width: '33.33%' }}>Signature</td>
                                <td style={{ width: '33.33%' }}></td>
                                <td style={{ width: '33.33%' }}></td>
                            </tr>

                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Address</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        <p>*Nomination shall be attested by two witness in case of thumb impression</p>
                    </div>

                    <div className="terms">
                        <h6>Terms & Conditions</h6>

                        <ol>
                            <li>The customer should maintain balance as may be required from time to time in the account as well
                                as a sufficient balance to honour
                                cheques issued to third parties. Changes in the BanU Service charges or minimum balance
                                requirement are displayed on the Notice
                                Board of the Branches and on the website. The non-maintenance of the adequate balance shall
                                automatically entifle the Bank to
                                levy the charges</li>

                            <li>
                                Saving account having no account operations initiated by customer for more than one year will be
                                treated as lnoperative Account
                                and no operations for more than two years will be treated as Dormant account as per RBI
                                guidelines. For regularise the account
                                Latest KYC submission alongwith photograph is must
                            </li>
                            <li>
                                lnward / Outward Cheque return unpaid for any reason will cause charges as per Bank policy.
                            </li>
                            <li>
                                Autorenewal ofTermDeposits:-TheTermDepositswouldbeautomaticallyrenewsundertheAutoRenewal
                                Processonthedateof
                                maturity, at a rate of lnterest prevailing on the date of renewal and for the same period for
                                which the existing deposit was kept. ln
                                case any depositor wishes to alter the period / or withdraw the proceeds, they may do so as per
                                Bank's prevailing guidelines in this
                                regard in the Bank's Deposit Policy
                            </li>
                            <li>
                                Penal lnterest will be charged for prematurity of Deposit as per Bank's prevailing guidelines in
                                this regard in the Bank's Deposit
                                Policy
                            </li>
                            <li>
                                Our deposits are insured underthe Deposit lnsurance and Credit Guarantee Corporation of lndia
                                (DlCGCl) scheme
                            </li>
                            <li>
                                Fixed Deposit Receipt should be submitted with branch for recording Renewal details
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form3;