import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/calc';

export default () => (
    <Layout header="Calc" title="calculator">
        <Calc />
        <hr />
        <div>
            <Link href="/">
                <button>&lt;&lt; Back to Top</button>
            </Link>
        </div>
    </Layout>
);