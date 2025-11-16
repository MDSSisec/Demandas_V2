'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { InputWithLabel, SelectWithLabel, TextareaWithLabel } from "@/components/input-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { IconDatabase } from "@tabler/icons-react";
import styles from "./dados.module.css";

export default function FormularioDados() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    tipoDados: '',
    fontesDados: '',
    formatoSaida: '',
    urgencia: '',
    prazo: '',
    temPrazo: true,
    requerVisualizacao: false,
    dadosSensiveis: false,
    compartilharResultados: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTogglePrazo = () => {
    setFormData(prev => ({
      ...prev,
      temPrazo: !prev.temPrazo,
      prazo: !prev.temPrazo ? prev.prazo : ''
    }));
  };

  const handleToggleVisualizacao = () => {
    setFormData(prev => ({
      ...prev,
      requerVisualizacao: !prev.requerVisualizacao
    }));
  };

  const handleToggleDadosSensiveis = () => {
    setFormData(prev => ({
      ...prev,
      dadosSensiveis: !prev.dadosSensiveis
    }));
  };

  const handleToggleCompartilhar = () => {
    setFormData(prev => ({
      ...prev,
      compartilharResultados: !prev.compartilharResultados
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário de dados:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const tipoDadosOptions = [
    { value: "analise-exploratoria", label: "Análise Exploratória" },
    { value: "relatorio-gerencial", label: "Relatório Gerencial" },
    { value: "dashboard", label: "Dashboard" },
    { value: "consulta-sql", label: "Consulta SQL" },
    { value: "etl-pipeline", label: "ETL/Pipeline de Dados" },
    { value: "machine-learning", label: "Machine Learning" }
  ];

  const fontesDadosOptions = [
    { value: "banco-principal", label: "Banco de Dados Principal" },
    { value: "apis-externas", label: "APIs Externas" },
    { value: "planilhas", label: "Planilhas" },
    { value: "logs-sistema", label: "Logs do Sistema" },
    { value: "dados-publicos", label: "Dados Públicos" },
    { value: "multiplas-fontes", label: "Múltiplas Fontes" }
  ];

  const formatoSaidaOptions = [
    { value: "excel", label: "Excel (.xlsx)" },
    { value: "csv", label: "CSV" },
    { value: "pdf", label: "PDF" },
    { value: "dashboard-web", label: "Dashboard Web" },
    { value: "powerbi", label: "Power BI" },
    { value: "json", label: "JSON" }
  ];

  const urgenciaOptions = [
    { value: "baixa", label: "Baixa" },
    { value: "media", label: "Média" },
    { value: "alta", label: "Alta" },
    { value: "critica", label: "Crítica" }
  ];

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.titleContainer}>
                <IconDatabase className={styles.icon} />
                <h1 className={styles.title}>Nova Demanda de Dados</h1>
              </div>
              <p className={styles.subtitle}>
                Especifique os requisitos para análise de dados, relatórios e dashboards
              </p>
            </div>
            <div className={styles.formContainer}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle>Informações da Demanda</CardTitle>
                  <CardDescription>
                    Detalhe as especificações para processamento e análise de dados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                      <InputWithLabel
                        id="titulo"
                        label="Título da Demanda"
                        placeholder="Ex: Relatório de vendas por região"
                        required={true}
                        value={formData.titulo}
                        onChange={(e) => handleInputChange('titulo', e.target.value)}
                        className={styles.fullWidth}
                      />
                      
                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="tipoDados"
                          label="Tipo de Análise"
                          placeholder="Selecione o tipo"
                          required={true}
                          value={formData.tipoDados}
                          onValueChange={(value) => handleInputChange('tipoDados', value)}
                          options={tipoDadosOptions}
                          className={styles.halfWidth}
                        />
                        
                        <SelectWithLabel
                          id="fontesDados"
                          label="Fonte dos Dados"
                          placeholder="Selecione a fonte"
                          required={true}
                          value={formData.fontesDados}
                          onValueChange={(value) => handleInputChange('fontesDados', value)}
                          options={fontesDadosOptions}
                          className={styles.halfWidth}
                        />
                      </div>

                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="formatoSaida"
                          label="Formato de Saída"
                          placeholder="Selecione o formato"
                          required={true}
                          value={formData.formatoSaida}
                          onValueChange={(value) => handleInputChange('formatoSaida', value)}
                          options={formatoSaidaOptions}
                          className={styles.halfWidth}
                        />
                        
                        <SelectWithLabel
                          id="urgencia"
                          label="Urgência"
                          placeholder="Selecione a urgência"
                          required={true}
                          value={formData.urgencia}
                          onValueChange={(value) => handleInputChange('urgencia', value)}
                          options={urgenciaOptions}
                          className={styles.halfWidth}
                        />
                      </div>
                      
                      <div className={styles.prazoContainer}>
                        <div className={styles.prazoHeader}>
                          <label className={styles.prazoLabel}>Prazo</label>
                          <div className={styles.prazoToggle}>
                            <Checkbox
                              id="temPrazo"
                              checked={formData.temPrazo}
                              onCheckedChange={handleTogglePrazo}
                            />
                            <label htmlFor="temPrazo" className={styles.toggleLabel}>
                              Definir prazo
                            </label>
                          </div>
                        </div>
                        {formData.temPrazo && (
                          <InputWithLabel
                            id="prazo"
                            label=""
                            type="date"
                            placeholder=""
                            required={false}
                            value={formData.prazo}
                            onChange={(e) => handleInputChange('prazo', e.target.value)}
                            className={styles.prazoInput}
                          />
                        )}
                      </div>

                      <TextareaWithLabel
                        id="descricao"
                        label="Descrição da Análise"
                        placeholder="Descreva os dados necessários, métricas esperadas, filtros, periodicidade, etc."
                        required={true}
                        value={formData.descricao}
                        onChange={(e) => handleInputChange('descricao', e.target.value)}
                        rows={5}
                        className={styles.fullWidth}
                      />

                      <div className={styles.checkboxContainer}>
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="requerVisualizacao"
                            checked={formData.requerVisualizacao}
                            onCheckedChange={handleToggleVisualizacao}
                          />
                          <label htmlFor="requerVisualizacao" className={styles.checkboxLabel}>
                            Requer visualização/gráficos
                          </label>
                        </div>
                        
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="dadosSensiveis"
                            checked={formData.dadosSensiveis}
                            onCheckedChange={handleToggleDadosSensiveis}
                          />
                          <label htmlFor="dadosSensiveis" className={styles.checkboxLabel}>
                            Contém dados sensíveis/confidenciais
                          </label>
                        </div>
                        
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="compartilharResultados"
                            checked={formData.compartilharResultados}
                            onCheckedChange={handleToggleCompartilhar}
                          />
                          <label htmlFor="compartilharResultados" className={styles.checkboxLabel}>
                            Resultados serão compartilhados externamente
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                      <Button type="submit" className={styles.submitButton}>
                        Cadastrar Demanda de Dados
                      </Button>
                      <Button type="button" variant="outline" className={styles.cancelButton}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}