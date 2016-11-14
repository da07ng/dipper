define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "ã_FGDC__Ç",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "ã_None__Ç",
    	notComplete: "ã_Not complete_____Ç",
    	other: "ã_Other___Ç",
    	present: "ã_Present___Ç",
    	unknown: "ã_Unknown___Ç",
    	unpublishedMaterial: "ã_Unpublished material_______Ç"
    },
    
    hints: {
    	integerGreaterThanOne: "ã_(enter an integer > 1)________Ç",
    	integer0To100: "ã_(enter an integer 0..100)_________Ç"
    },
    
    citeinfo: {
    	caption: "ã_Citation Information_______Ç",
    	origin: "ã_Originator____Ç",
    	pubdate: "ã_Publication Date______Ç",
    	pubtime: "ã_Publication Time______Ç",
    	title: "ã_Title___Ç",
    	edition: "ã_Edition___Ç",
    	geoform: {
    		caption: "ã_Geospatial Data Presentation Form___________Ç",
    		atlas: "ã_Atlas___Ç",
    		audio: "ã_Audio___Ç",
    		diagram: "ã_Diagram___Ç",
    		sDocument: "ã_Document___Ç",
    		globe: "ã_Globe___Ç",
    		map: "ã_Map__Ç",
    		model: "ã_Model___Ç",
    		multiMediaPresentation: "ã_Multimedia presentation________Ç",
    		profile: "ã_Profile___Ç",
    		rasterDigitalData: "ã_Raster digital data_______Ç",
    		remoteSensingImage: "ã_Remote-sensing image_______Ç",
    		section: "ã_Section___Ç",
    		spreadsheet: "ã_Spreadsheet____Ç",
    		tabularDigitalData: "ã_Tabular digital data_______Ç",
    		vectorDigitalData: "ã_Vector digital data_______Ç",
    		video: "ã_Video___Ç",
    		view: "ã_View__Ç"
    	},
    	serinfo: {
    		caption: "ã_Series Information______Ç",
    		sername: "ã_Series Name____Ç",
    		issue: "ã_Issue Identification_______Ç"
    	},
    	pubinfo: {
    		caption: "ã_Publication Information________Ç",
    		pubplace: "ã_Publication Place______Ç",
    		publish: "ã_Publisher____Ç"
    	},
    	othercit: "ã_Other Citation Details________Ç",
    	onlink: "ã_Online Linkage (URL)_______Ç"
    },
    
    cntinfo: {
    	caption: "ã_Contact Information_______Ç",
    	section: {
    		primary: "ã_Primary___Ç",
    		phoneAndEmail: "ã_Phone and E-Mail______Ç",
    		hoursAndInstructions: "ã_Hours and Instructions________Ç"
    	},
    	cntorgp: {
    		caption: "ã_By organization______Ç",
    		cntorg: "ã_Organization_____Ç",
    		cntper: "ã_Person___Ç"
    	},
    	cntperp: {
    		caption: "ã_By person____Ç",
    		cntper: "ã_Person___Ç",
    		cntorg: "ã_Organization_____Ç"
    	},
    	cntpos: "ã_Position___Ç",
    	cntaddr: {
    		caption: "ã_Address___Ç",
    		addrtype: {
    			caption: "ã_Address Type_____Ç",
    			mailing: "ã_Mailing___Ç",
    			physical: "ã_Physical___Ç",
    			mailingAndPhysical: "ã_Mailing and Physical_______Ç"
    		},
    		address: "ã_Address___Ç",
    		city: "ã_City__Ç",
    		state: "ã_State___Ç",
    		postal: "ã_Postal Code____Ç",
    		country: "ã_Country___Ç"
    	},
    	cntvoice: "ã_Voice___Ç",
    	cnttdd: "ã_TDD/TTY Telephone (hearing impaired)____________Ç",
    	cntfax: "ã_Fax__Ç",
    	cntemail: "ã_E-Mail Address_____Ç",
    	hours: "ã_Hours___Ç",
    	cntinst: "ã_Instructions_____Ç"
    },
    
    dataqual: {
    	caption: "ã_Data Quality Information________Ç",
    	section: {
    		attributeAccuracy: "ã_Attribute Accuracy______Ç",
    		logicalConsistency: "ã_Logical Consistency_______Ç",
    		completeness: "ã_Completeness_____Ç",
    		positionalAccuracy: "ã_Positional Accuracy_______Ç",
    		lineage: "ã_Lineage___Ç",
    		cloudCover: "ã_Cloud Cover____Ç"
    	},
    	attracc: {
    		caption: "ã_Attribute Accuracy______Ç",
    		attraccr: "ã_Attribute Accuracy Report_________Ç",
    		qattracc: {
    			caption: "ã_Quantitative Attribute Accuracy Assessment______________Ç",
    			attraccv: "ã_Attribute Accuracy Value________Ç",
    			attracce: "ã_Attribute Accuracy Explanation__________Ç"
    		}
    	},
    	logic: "ã_Logical Consistency Report_________Ç",
    	complete: "ã_Completeness Report_______Ç",
    	posacc: "ã_Positional Accuracy_______Ç",
    	horizpa: {
    		caption: "ã_Horizontal Positional Accuracy__________Ç",
    		horizpar: "ã_Horizontal Positional Accuracy Report____________Ç",
    		qhorizpa: {
    			caption: "ã_Quantitative Horizontal Positional Accuracy Assessment_________________Ç",
    			horizpav: "ã_Horizontal Positional Accuracy Value____________Ç",
    			horizpae: "ã_Horizontal Positional Accuracy Explanation______________Ç"
    		}
    	},
    	vertacc: {
    		caption: "ã_Vertical Positional Accuracy_________Ç",
    		vertaccr: "ã_Vertical Positional Accuracy Report____________Ç",
    		qvertpa: {
    			caption: "ã_Quantitative Vertical Positional Accuracy Assessment_________________Ç",
    			vertaccv: "ã_Vertical Positional Accuracy Value___________Ç",
    			vertacce: "ã_Vertical Positional Accuracy Explanation_____________Ç"
    		}
    	},
    	lineage: {
    		caption: "ã_Lineage___Ç"
    	},
    	srcinfo: {
    		caption: "ã_Source Information______Ç",
    		srccite: "ã_Source Citation______Ç",
    		srcscale: "ã_Source Scale Denominator________Ç",
    		typesrc: {
    			caption: "ã_Type of Source Media_______Ç",
    			paper: "ã_Paper___Ç",
    			stableBaseMaterial: "ã_Stable-base material_______Ç",
    			microfiche: "ã_Microfiche____Ç",
    			microfilm: "ã_Microfilm____Ç",
    			audiocassette: "ã_Audio cassette_____Ç",
    			chart: "ã_Chart___Ç",
    			filmstrip: "ã_Film strip____Ç",
    			transparency: "ã_Transparency_____Ç",
    			videocassette: "ã_Video cassette_____Ç",
    			videodisc: "ã_Video disc____Ç",
    			videotape: "ã_Video tape____Ç",
    			physicalModel: "ã_Physical model_____Ç",
    			computerProgram: "ã_Computer program______Ç",
    			disc: "ã_Disc__Ç",
    			cartridgeTape: "ã_Cartridge tape_____Ç",
    			magneticTape: "ã_Magnetic tape_____Ç",
    			online: "ã_Online___Ç",
    			cdrom: "ã_CD-ROM___Ç",
    			electronicBulletinBoard: "ã_Electronic bulletin board_________Ç",
    			electronicMailSystem: "ã_Electronic mail system________Ç"
    		},
    		srctime: "ã_Source Time Period of Content__________Ç",
    		srccurr: "ã_Source Currentness Reference_________Ç",
    		srccitea: "ã_Source Citation Abbreviation_________Ç",
    		srccontr: "ã_Source Contribution_______Ç"
    	},
    	procstep: {
    		caption: "ã_Process Step_____Ç",
    		procdesc: "ã_Process Description_______Ç",
    		srcused: "ã_Source Used Citation Abbreviation___________Ç",
    		procdate: "ã_Process Date_____Ç",
    		proctime: "ã_Process Time_____Ç",
    		srcprod: "ã_Source Produced Citation Abbreviation____________Ç",
    		proccont: "ã_Process Contact______Ç"
    	},
    	cloud: "ã_Cloud Cover____Ç"
    },
    
    distinfo: {
    	caption: "ã_Distribution Information________Ç",
    	section: {
    		distributor: "ã_Distributor____Ç",
    		description: "ã_Description____Ç",
    		orderProcess: "ã_Order Process_____Ç",
    		prerequisites: "ã_Prerequisites_____Ç",
    		availability: "ã_Availability_____Ç"
    	},
    	distrib: "ã_Distributor____Ç",
    	resdesc: {
    		caption: "ã_Resource Description_______Ç",
    		liveData: "ã_Live Data and Maps______Ç",
    		downloadableData: "ã_Downloadable Data______Ç",
    		offlineData: "ã_Offline Data_____Ç",
    		staticMapImages: "ã_Static Map Images______Ç",
    		sDocument: "ã_Other Documents______Ç",
    		application: "ã_Applications_____Ç",
    		geographicService: "ã_Geographic Services_______Ç",
    		clearingHouse: "ã_Clearinghouses_____Ç",
    		mapFiles: "ã_Map Files____Ç",
    		geographicActivies: "ã_Geographic Activities_______Ç"
    	},
    	distliab: "ã_Distribution Liability Statement___________Ç",
    	custom: "ã_Custom Order Process_______Ç",
    	techpreq: "ã_Technical Prerequisites________Ç",
    	availabl: "ã_Availability_____Ç"
    },
    
    eainfo: {
    	caption: "ã_Entity and Attribute Information___________Ç",
    	overview: "ã_Overview Description_______Ç",
    	eaover: "ã_Entity and Attribute Overview__________Ç",
    	eadetcit: "ã_Entity and Attribute Detail Citation____________Ç"
    },
    
    idinfo: {
    	caption: "ã_Identification Information_________Ç",
    	section: {
    		timeAndStatus: "ã_Time and Status______Ç",
    		constraints: "ã_Constraints____Ç",
    		contact: "ã_Contact___Ç",
    		additional: "ã_Additional____Ç"
    	},
    	citeinfo: "ã_Citation___Ç",
    	descript: {
    		caption: "ã_Description____Ç",
    		sAbstract: "ã_Abstract___Ç",
    		purpose: "ã_Purpose___Ç",
    		supplinf: "ã_Supplemental Information________Ç"
    	},
    	timeperd: {
    		caption: "ã_Time Period of Content________Ç",
    		current: {
    			caption: "ã_Currentness Reference_______Ç",
    			groundCondition: "ã_Ground Condition______Ç",
    			publicationDate: "ã_Publication Date______Ç"
    		}
    	},
    	status: {
    		caption: "ã_Status___Ç",
    		progress: {
    			caption: "ã_Progress___Ç",
     			complete: "ã_Complete___Ç",
    			inWork: "ã_In work___Ç",
    			planned: "ã_Planned___Ç"
    		},
    		update: {
    			caption: "ã_Maintenance and Update Frequency___________Ç",
    			continual: "ã_Continual____Ç",
    			daily: "ã_Daily___Ç",
    			weekly: "ã_Weekly___Ç",
    			monthly: "ã_Monthly___Ç",
    			annually: "ã_Annually___Ç",
    			unknown: "ã_Unknown___Ç",
    			asNeeded: "ã_As needed____Ç",
    			irregular: "ã_Irregular____Ç",
    			nonePlanned: "ã_None planned_____Ç"
    		}
    	},
    	spdom: {
    		caption: "ã_Extent___Ç",
    		bounding: {
    			caption: "ã_Bounding Coordinates_______Ç",
    			westbc: "ã_West Bounding Longitude________Ç",
    			eastbc: "ã_East Bounding Longitude________Ç",
    			northbc: "ã_North Bounding Latitude________Ç",
    			southbc: "ã_South Bounding Latitude________Ç"
    		}
    	},
      keywords: {
        caption: "Palavras-Chaves",
        theme: "Tema",
        place: "Posicionar",
        stratum: "Estrato",
        temporal: "Temporal",
        thesaursus: "Dicionário de Sinônimos Associado",
        delimited: "Palavras-Chaves",
        themektIsoTopicCategory: "Tópico ISO...",
        themektIsoTopicDialog: "Tópico ISO",
        placektGnis: "Sistema de Informações de Nomes Geográfico"
      },
      accconst: "Restrições de Acesso",
      useconst: "Restrições de Uso",
      ptcontac: "Ponto de Contato do Recurso",
      browse: {
      	caption: "ã_Browse Graphic_____Ç",
      	browsen: "ã_Browse Graphic URL______Ç",
      	browsed: "ã_Browse Graphic File Description__________Ç",
      	browset: "ã_Browse Graphic File Type________Ç"
      },
      datacred: "Crédito do Conjunto de Dados",
      secinfo: {
      	caption: "ã_Security Information_______Ç",
      	secsys: "ã_Security Classification System__________Ç",
      	secclass: {
      		caption: "ã_Security Classification________Ç",
      		topSecret: "ã_Top secret____Ç",
      		secret: "ã_Secret___Ç",
      		confidential: "ã_Confidential_____Ç",
      		restricted: "ã_Restricted____Ç",
      		unclassified: "ã_Unclassified_____Ç",
      		sensitive: "ã_Sensitive____Ç"
      	},
      	sechandl: "ã_Security Handling Description__________Ç"
      },
      sNative: "Ambiente do Conjunto de Dados Nativo",
      crossref: "Referência Cruzada"
    },
    
    metadata: {
    	idinfo: "ã_Identification_____Ç",
    	dataqual: "ã_Quality___Ç",
    	spdoinfo: "ã_Spatial Data Organization_________Ç",
    	spref: "ã_Spatial Reference______Ç",
    	eainfo: "ã_Entity and Attribute_______Ç",
    	distinfo: "ã_Distribution_____Ç",
    	metainfo: "ã_Metadata___Ç"
    },
    
    metainfo: {
    	caption: "ã_Metadata Information_______Ç",
    	section: {
    		dates: "ã_Metadata Dates_____Ç",
    		contact: "ã_Metadata Contact______Ç",
    		standard: "ã_Metadata Standard______Ç",
    		additional: "ã_Additional____Ç"
    	},
      metd: "Metadados",
      metrd: "Data de Revisão do Metadados",
      metfrd: "Data Futura de Revisão do Metadados",
      metstdn: "Nome Padrão de Metadados",
      metstdv: "Versão Padrão de Metadados",
      metac: "Restrições de Acesso dos Metadados",
      metuc: "Restrições de Uso de Metadados",
      metsi: {
      	caption: "ã_Metadata Security Information__________Ç",
      	metscs: "ã_Metadata Security Classification System_____________Ç",
      	metsc: "ã_Metadata Security Classification___________Ç",
      	metshd: "ã_Metadata Security Handling Description____________Ç"
      }
    },
    
    spref: {
    	caption: "ã_Spatial Reference Information__________Ç",
    	horizsys: {
    		caption: "ã_Horizontal Coordinate System_________Ç",
    		geograph: {
    			caption: "ã_Geographic____Ç",
    			latres: "ã_Latitude Resolution_______Ç",
    			longres: "ã_Longitude Resolution_______Ç",
    			geogunit: {
    				caption: "ã_Geographic Coordinate Units_________Ç",
    				decimalDegrees: "ã_Decimal degrees______Ç",
    				decimalMinutes: "ã_Decimal minutes______Ç",
    				decimalSeconds: "ã_Decimal seconds______Ç",
    				degreesAndDecimalMinutes: "ã_Degrees and decimal minutes_________Ç",
    				degreesMinutesAndDecimalSeconds: "ã_Degrees, minutes, and decimal seconds____________Ç",
    				radians: "ã_Radians___Ç",
    				grads: "ã_Grads___Ç"
    			}
    		},
    		planar: {
    			caption: "ã_Planar___Ç"
    		},
    		local: {
    			caption: "ã_Local___Ç",
    			localdes: "ã_Local Description______Ç",
    			localgeo: "ã_Local Georeference Information__________Ç"
    		},
    		geodetic: {
    			caption: "ã_Geodetic Model_____Ç",
    			horizdn: {
    				caption: "ã_Horizontal Datum Name_______Ç",
    				nad83: "ã_North American Datum of 1983_________Ç",
    				nad27: "ã_North American Datum of 1927_________Ç"
    			},
    			ellips: {
    				caption: "ã_Ellipsoid Name_____Ç",
    				grs80: "ã_Geodetic Reference System 80_________Ç",
    				clarke1866: "ã_Clarke 1866____Ç"
    			},
    			semiaxis: "ã_Semi-major Axis______Ç",
    			denflat: "ã_Denominator of Flattening Ratio__________Ç"
    		}
    	},
    	vertdef: {
    		caption: "ã_Vertical Coordinate System_________Ç",
    		altsys: {
    			caption: "ã_Altitude System______Ç",
    			altdatum: {
    				caption: "ã_Altitude Datum Name_______Ç",
    				navd88: "ã_North American Vertical Datum of 1988____________Ç",
    				ngvd29: "ã_National Geodetic Vertical Datum of 1929_____________Ç"
    			},
    			altres: "ã_Altitude Resolution_______Ç",
    			altunits: {
    				caption: "ã_Altitude Distance Units________Ç",
    				meters: "ã_Meters___Ç",
    				feet: "ã_Feet__Ç"
    			},
    			altenc: {
    				caption: "ã_Altitude Encoding Method________Ç",
    				explicit: "ã_Explicit elevation coordinate included with horizontal coordinates_____________________Ç",
    				implicit: "ã_Implicit coordinate_______Ç",
    				attribute: "ã_Attribute values______Ç"
    			}
    		},
    		depthsys: {
    			caption: "ã_Depth System_____Ç",
    			depthdn: {
    				caption: "ã_Depth Datum Name______Ç",
    				option1: "ã_Local surface_____Ç", 
    				option2: "ã_Chart datum; datum for sounding reduction_____________Ç", 
    				option3: "ã_Lowest astronomical tide________Ç", 
    				option4: "ã_Highest astronomical tide_________Ç", 
    				option5: "ã_Mean low water_____Ç", 
    				option6: "ã_Mean high water______Ç", 
    				option7: "ã_Mean sea level_____Ç", 
    				option8: "ã_Land survey datum______Ç", 
    				option9: "ã_Mean low water springs________Ç", 
    				option10: "ã_Mean high water springs________Ç", 
    				option11: "ã_Mean low water neap_______Ç", 
    				option12: "ã_Mean high water neap_______Ç", 
    				option13: "ã_Mean lower low water_______Ç", 
    				option14: "ã_Mean lower low water springs_________Ç", 
    				option15: "ã_Mean higher high water________Ç", 
    				option16: "ã_Mean higher low water_______Ç", 
    				option17: "ã_Mean lower high water_______Ç", 
    				option18: "ã_Spring tide____Ç", 
    				option19: "ã_Tropic lower low water________Ç", 
    				option20: "ã_Neap tide____Ç", 
    				option21: "ã_High water____Ç", 
    				option22: "ã_Higher high water______Ç", 
    				option23: "ã_Low water____Ç", 
    				option24: "ã_Low-water datum______Ç", 
    				option25: "ã_Lowest low water______Ç", 
    				option26: "ã_Lower low water______Ç", 
    				option27: "ã_Lowest normal low water________Ç", 
    				option28: "ã_Mean tide level______Ç", 
    				option29: "ã_Indian spring low water________Ç", 
    				option30: "ã_High-water full and charge_________Ç", 
    				option31: "ã_Low-water full and charge_________Ç", 
    				option32: "ã_Columbia River datum_______Ç", 
    				option33: "ã_Gulf Coast low water datum_________Ç", 
    				option34: "ã_Equatorial springs low water_________Ç", 
    				option35: "ã_Approximate lowest astronomical tide____________Ç", 
    				option36: "ã_No correction_____Ç"
    			},
    			depthres: "ã_Depth Resolution______Ç",
    			depthdu: {
    				caption: "ã_Depth Distance Units_______Ç",
    				meters: "ã_Meters___Ç",
    				feet: "ã_Feet__Ç"
    			},   			
    			depthem: {
    				caption: "ã_Depth Encoding Method_______Ç",
    				explicit: "ã_Explicit depth coordinate included with horizontal coordinates____________________Ç",
    				implicit: "ã_Implicit coordinate_______Ç",
    				attribute: "ã_Attribute values______Ç"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "ã_Time Period Information________Ç",
    	sngdate: "ã_Single Date____Ç",
    	mdattim: "ã_Multiple Dates_____Ç",
    	rngdates: "ã_Date Range____Ç",
    	caldate: "ã_Date__Ç",
    	time: "ã_Time__Ç",
    	begdate: "ã_Beginning Date_____Ç",
    	begtime: "ã_Beginning Time_____Ç",
    	enddate: "ã_Ending Date____Ç",
    	endtime: "ã_Ending Time____Ç"
    }
   
  })
);
