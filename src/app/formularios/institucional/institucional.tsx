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
import { IconBuilding } from "@tabler/icons-react";
import styles from "./institucional.module.css";

export default function FormularioInstitucional() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    tipoInstitucional: '',
    categoria: '',
    departamento: '',
    prioridade: '',
    prazo: '',
    temPrazo: true,
    requerAprovacao: false,
    confidencial: false,
    envolveExterno: false
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

  const handleToggleAprovacao = () => {
    setFormData(prev => ({
      ...prev,
      requerAprovacao: !prev.requerAprovacao
    }));
  };

  const handleToggleConfidencial = () => {
    setFormData(prev => ({
      ...prev,
      confidencial: !prev.confidencial
    }));
  };

  const handleToggleExterno = () => {
    setFormData(prev => ({
      ...prev,
      envolveExterno: !prev.envolveExterno
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário institucional:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const tipoInstitucionalOptions = [
    { value: "reuniao", label: "Reunião" },
    { value: "planejamento", label: "Planejamento" },
    { value: "alinhamento", label: "Alinhamento" },
    { value: "treinamento", label: "Treinamento" },
    { value: "apresentacao", label: "Apresentação" },
    { value: "documentacao", label: "Documentação" }
  ];

  const categoriaOptions = [
    { value: "estrategico", label: "Estratégico" },
    { value: "operacional", label: "Operacional" },
    { value: "administrativo", label: "Administrativo" },
    { value: "recursos-humanos", label: "Recursos Humanos" },
    { value: "financeiro", label: "Financeiro" },
    { value: "compliance", label: "Compliance" }
  ];

  const departamentoOptions = [
    { value: "ti", label: "TI" },
    { value: "rh", label: "Recursos Humanos" },
    { value: "financeiro", label: "Financeiro" },
    { value: "comercial", label: "Comercial" },
    { value: "operacoes", label: "Operações" },
    { value: "diretoria", label: "Diretoria" },
    { value: "todos", label: "Todos os Departamentos" }
  ];

  const prioridadeOptions = [
    { value: "baixa", label: "Baixa" },
    { value: "media", label: "Média" },
    { value: "alta", label: "Alta" },
    { value: "urgente", label: "Urgente" }
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
                <IconBuilding className={styles.icon} />
                <h1 className={styles.title}>Nova Demanda Institucional</h1>
              </div>
              <p className={styles.subtitle}>
                Organize reuniões, alinhamentos e atividades internas da empresa
              </p>
            </div>
            <div className={styles.formContainer}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle>Informações da Atividade</CardTitle>
                  <CardDescription>
                    Detalhe a atividade institucional, reunião ou alinhamento necessário
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                      <InputWithLabel
                        id="titulo"
                        label="Título da Atividade"
                        placeholder="Ex: Reunião de alinhamento estratégico Q4"
                        required={true}
                        value={formData.titulo}
                        onChange={(e) => handleInputChange('titulo', e.target.value)}
                        className={styles.fullWidth}
                      />
                      
                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="tipoInstitucional"
                          label="Tipo de Atividade"
                          placeholder="Selecione o tipo"
                          required={true}
                          value={formData.tipoInstitucional}
                          onValueChange={(value) => handleInputChange('tipoInstitucional', value)}
                          options={tipoInstitucionalOptions}
                          className={styles.halfWidth}
                        />
                        
                        <SelectWithLabel
                          id="categoria"
                          label="Categoria"
                          placeholder="Selecione a categoria"
                          required={true}
                          value={formData.categoria}
                          onValueChange={(value) => handleInputChange('categoria', value)}
                          options={categoriaOptions}
                          className={styles.halfWidth}
                        />
                      </div>

                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="departamento"
                          label="Departamento Envolvido"
                          placeholder="Selecione o departamento"
                          required={true}
                          value={formData.departamento}
                          onValueChange={(value) => handleInputChange('departamento', value)}
                          options={departamentoOptions}
                          className={styles.halfWidth}
                        />
                        
                        <SelectWithLabel
                          id="prioridade"
                          label="Prioridade"
                          placeholder="Selecione a prioridade"
                          required={true}
                          value={formData.prioridade}
                          onValueChange={(value) => handleInputChange('prioridade', value)}
                          options={prioridadeOptions}
                          className={styles.halfWidth}
                        />
                      </div>
                      
                      <div className={styles.prazoContainer}>
                        <div className={styles.prazoHeader}>
                          <label className={styles.prazoLabel}>Data Desejada</label>
                          <div className={styles.prazoToggle}>
                            <Checkbox
                              id="temPrazo"
                              checked={formData.temPrazo}
                              onCheckedChange={handleTogglePrazo}
                            />
                            <label htmlFor="temPrazo" className={styles.toggleLabel}>
                              Definir data
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
                        label="Descrição da Atividade"
                        placeholder="Descreva o objetivo, pauta, participantes esperados, resultados esperados, etc."
                        required={true}
                        value={formData.descricao}
                        onChange={(e) => handleInputChange('descricao', e.target.value)}
                        rows={5}
                        className={styles.fullWidth}
                      />

                      <div className={styles.checkboxContainer}>
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="requerAprovacao"
                            checked={formData.requerAprovacao}
                            onCheckedChange={handleToggleAprovacao}
                          />
                          <label htmlFor="requerAprovacao" className={styles.checkboxLabel}>
                            Requer aprovação da diretoria
                          </label>
                        </div>
                        
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="confidencial"
                            checked={formData.confidencial}
                            onCheckedChange={handleToggleConfidencial}
                          />
                          <label htmlFor="confidencial" className={styles.checkboxLabel}>
                            Informação confidencial/estratégica
                          </label>
                        </div>
                        
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="envolveExterno"
                            checked={formData.envolveExterno}
                            onCheckedChange={handleToggleExterno}
                          />
                          <label htmlFor="envolveExterno" className={styles.checkboxLabel}>
                            Envolve participantes externos
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                      <Button type="submit" className={styles.submitButton}>
                        Cadastrar Demanda Institucional
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