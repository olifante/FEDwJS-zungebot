import Head from 'next/head'

let BootstrapHead = function(props) {
    return (
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
        />
      </Head>
    )
}

export default BootstrapHead