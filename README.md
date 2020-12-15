# Requisição de dados do COVID19 de uma API

Projeto com requisições de uma API para listar dados do COVID19.

## API Utilizada

Link da api gratuita dos países.
https://coronavirus-19-api.herokuapp.com/countries

### Informações obtidas

```html
<Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
</Grid>
```

### Imagem ilustrativa do projeto

![](/.demoimg/Screenshot%20from%202020-12-15%2018-21-50.png)
