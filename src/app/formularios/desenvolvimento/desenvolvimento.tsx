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
import { IconCode } from "@tabler/icons-react";
import styles from "./desenvolvimento.module.css";

export default function FormularioDesenvolvimento() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    tipoDesenvolvimento: '',
    tecnologia: '',
    complexidade: '',
    urgencia: '',
    prazo: '',
    temPrazo: true,
    requerEstimativa: false,
    temDocumentacao: false
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

  const handleToggleEstimativa = () => {
    setFormData(prev => ({
      ...prev,
      requerEstimativa: !prev.requerEstimativa
    }));
  };

  const handleToggleDocumentacao = () => {
    setFormData(prev => ({
      ...prev,
      temDocumentacao: !prev.temDocumentacao
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário de desenvolvimento:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const tipoDesenvolvimentoOptions = [
    { value: "nova-funcionalidade", label: "Nova Funcionalidade" },
    { value: "bug-fix", label: "Correção de Bug" },
    { value: "melhoria", label: "Melhoria" },
    { value: "refatoracao", label: "Refatoração" },
    { value: "integracao", label: "Integração" }
  ];

  const tecnologiaOptions = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile" },
    { value: "database", label: "Database" }
  ];

  const complexidadeOptions = [
    { value: "baixa", label: "Baixa" },
    { value: "media", label: "Média" },
    { value: "alta", label: "Alta" },
    { value: "muito-alta", label: "Muito Alta" }
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
                <IconCode className={styles.icon} />
                <h1 className={styles.title}>Nova Demanda de Desenvolvimento</h1>
              </div>
              <p className={styles.subtitle}>
                Preencha as informações específicas para demandas de desenvolvimento
              </p>
            </div>
            <div className={styles.formContainer}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle>Informações da Demanda</CardTitle>
                  <CardDescription>
                    Especifique os detalhes técnicos e requisitos do desenvolvimento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                      <InputWithLabel
                        id="titulo"
                        label="Título da Demanda"
                        placeholder="Ex: Implementar sistema de login"
                        required={true}
                        value={formData.titulo}
                        onChange={(e) => handleInputChange('titulo', e.target.value)}
                        className={styles.fullWidth}
                      />
                      
                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="tipoDesenvolvimento"
                          label="Tipo de Desenvolvimento"
                          placeholder="Selecione o tipo"
                          required={true}
                          value={formData.tipoDesenvolvimento}
                          onValueChange={(value) => handleInputChange('tipoDesenvolvimento', value)}
                          options={tipoDesenvolvimentoOptions}
                          className={styles.halfWidth}
                        />
                        
                        <SelectWithLabel
                          id="tecnologia"
                          label="Área Técnica"
                          placeholder="Selecione a área"
                          required={true}
                          value={formData.tecnologia}
                          onValueChange={(value) => handleInputChange('tecnologia', value)}
                          options={tecnologiaOptions}
                          className={styles.halfWidth}
                        />
                      </div>

                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="complexidade"
                          label="Complexidade"
                          placeholder="Selecione a complexidade"
                          required={true}
                          value={formData.complexidade}
                          onValueChange={(value) => handleInputChange('complexidade', value)}
                          options={complexidadeOptions}
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
                        label="Descrição Técnica"
                        placeholder="Descreva os requisitos técnicos, funcionalidades esperadas, casos de uso, etc."
                        required={true}
                        value={formData.descricao}
                        onChange={(e) => handleInputChange('descricao', e.target.value)}
                        rows={5}
                        className={styles.fullWidth}
                      />

                      <div className={styles.checkboxContainer}>
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="requerEstimativa"
                            checked={formData.requerEstimativa}
                            onCheckedChange={handleToggleEstimativa}
                          />
                          <label htmlFor="requerEstimativa" className={styles.checkboxLabel}>
                            Requer estimativa de tempo/esforço
                          </label>
                        </div>
                        
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="temDocumentacao"
                            checked={formData.temDocumentacao}
                            onCheckedChange={handleToggleDocumentacao}
                          />
                          <label htmlFor="temDocumentacao" className={styles.checkboxLabel}>
                            Possui documentação/wireframes anexos
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                      <Button type="submit" className={styles.submitButton}>
                        Cadastrar Demanda de Desenvolvimento
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