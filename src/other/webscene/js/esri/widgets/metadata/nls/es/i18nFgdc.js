define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "á_FGDC__Ó",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "á_None__Ó",
    	notComplete: "á_Not complete_____Ó",
    	other: "á_Other___Ó",
    	present: "á_Present___Ó",
    	unknown: "á_Unknown___Ó",
    	unpublishedMaterial: "á_Unpublished material_______Ó"
    },
    
    hints: {
    	integerGreaterThanOne: "á_(enter an integer > 1)________Ó",
    	integer0To100: "á_(enter an integer 0..100)_________Ó"
    },
    
    citeinfo: {
    	caption: "á_Citation Information_______Ó",
    	origin: "á_Originator____Ó",
    	pubdate: "á_Publication Date______Ó",
    	pubtime: "á_Publication Time______Ó",
    	title: "á_Title___Ó",
    	edition: "á_Edition___Ó",
    	geoform: {
    		caption: "á_Geospatial Data Presentation Form___________Ó",
    		atlas: "á_Atlas___Ó",
    		audio: "á_Audio___Ó",
    		diagram: "á_Diagram___Ó",
    		sDocument: "á_Document___Ó",
    		globe: "á_Globe___Ó",
    		map: "á_Map__Ó",
    		model: "á_Model___Ó",
    		multiMediaPresentation: "á_Multimedia presentation________Ó",
    		profile: "á_Profile___Ó",
    		rasterDigitalData: "á_Raster digital data_______Ó",
    		remoteSensingImage: "á_Remote-sensing image_______Ó",
    		section: "á_Section___Ó",
    		spreadsheet: "á_Spreadsheet____Ó",
    		tabularDigitalData: "á_Tabular digital data_______Ó",
    		vectorDigitalData: "á_Vector digital data_______Ó",
    		video: "á_Video___Ó",
    		view: "á_View__Ó"
    	},
    	serinfo: {
    		caption: "á_Series Information______Ó",
    		sername: "á_Series Name____Ó",
    		issue: "á_Issue Identification_______Ó"
    	},
    	pubinfo: {
    		caption: "á_Publication Information________Ó",
    		pubplace: "á_Publication Place______Ó",
    		publish: "á_Publisher____Ó"
    	},
    	othercit: "á_Other Citation Details________Ó",
    	onlink: "á_Online Linkage (URL)_______Ó"
    },
    
    cntinfo: {
    	caption: "á_Contact Information_______Ó",
    	section: {
    		primary: "á_Primary___Ó",
    		phoneAndEmail: "á_Phone and E-Mail______Ó",
    		hoursAndInstructions: "á_Hours and Instructions________Ó"
    	},
    	cntorgp: {
    		caption: "á_By organization______Ó",
    		cntorg: "á_Organization_____Ó",
    		cntper: "á_Person___Ó"
    	},
    	cntperp: {
    		caption: "á_By person____Ó",
    		cntper: "á_Person___Ó",
    		cntorg: "á_Organization_____Ó"
    	},
    	cntpos: "á_Position___Ó",
    	cntaddr: {
    		caption: "á_Address___Ó",
    		addrtype: {
    			caption: "á_Address Type_____Ó",
    			mailing: "á_Mailing___Ó",
    			physical: "á_Physical___Ó",
    			mailingAndPhysical: "á_Mailing and Physical_______Ó"
    		},
    		address: "á_Address___Ó",
    		city: "á_City__Ó",
    		state: "á_State___Ó",
    		postal: "á_Postal Code____Ó",
    		country: "á_Country___Ó"
    	},
    	cntvoice: "á_Voice___Ó",
    	cnttdd: "á_TDD/TTY Telephone (hearing impaired)____________Ó",
    	cntfax: "á_Fax__Ó",
    	cntemail: "á_E-Mail Address_____Ó",
    	hours: "á_Hours___Ó",
    	cntinst: "á_Instructions_____Ó"
    },
    
    dataqual: {
    	caption: "á_Data Quality Information________Ó",
    	section: {
    		attributeAccuracy: "á_Attribute Accuracy______Ó",
    		logicalConsistency: "á_Logical Consistency_______Ó",
    		completeness: "á_Completeness_____Ó",
    		positionalAccuracy: "á_Positional Accuracy_______Ó",
    		lineage: "á_Lineage___Ó",
    		cloudCover: "á_Cloud Cover____Ó"
    	},
    	attracc: {
    		caption: "á_Attribute Accuracy______Ó",
    		attraccr: "á_Attribute Accuracy Report_________Ó",
    		qattracc: {
    			caption: "á_Quantitative Attribute Accuracy Assessment______________Ó",
    			attraccv: "á_Attribute Accuracy Value________Ó",
    			attracce: "á_Attribute Accuracy Explanation__________Ó"
    		}
    	},
    	logic: "á_Logical Consistency Report_________Ó",
    	complete: "á_Completeness Report_______Ó",
    	posacc: "á_Positional Accuracy_______Ó",
    	horizpa: {
    		caption: "á_Horizontal Positional Accuracy__________Ó",
    		horizpar: "á_Horizontal Positional Accuracy Report____________Ó",
    		qhorizpa: {
    			caption: "á_Quantitative Horizontal Positional Accuracy Assessment_________________Ó",
    			horizpav: "á_Horizontal Positional Accuracy Value____________Ó",
    			horizpae: "á_Horizontal Positional Accuracy Explanation______________Ó"
    		}
    	},
    	vertacc: {
    		caption: "á_Vertical Positional Accuracy_________Ó",
    		vertaccr: "á_Vertical Positional Accuracy Report____________Ó",
    		qvertpa: {
    			caption: "á_Quantitative Vertical Positional Accuracy Assessment_________________Ó",
    			vertaccv: "á_Vertical Positional Accuracy Value___________Ó",
    			vertacce: "á_Vertical Positional Accuracy Explanation_____________Ó"
    		}
    	},
    	lineage: {
    		caption: "á_Lineage___Ó"
    	},
    	srcinfo: {
    		caption: "á_Source Information______Ó",
    		srccite: "á_Source Citation______Ó",
    		srcscale: "á_Source Scale Denominator________Ó",
    		typesrc: {
    			caption: "á_Type of Source Media_______Ó",
    			paper: "á_Paper___Ó",
    			stableBaseMaterial: "á_Stable-base material_______Ó",
    			microfiche: "á_Microfiche____Ó",
    			microfilm: "á_Microfilm____Ó",
    			audiocassette: "á_Audio cassette_____Ó",
    			chart: "á_Chart___Ó",
    			filmstrip: "á_Film strip____Ó",
    			transparency: "á_Transparency_____Ó",
    			videocassette: "á_Video cassette_____Ó",
    			videodisc: "á_Video disc____Ó",
    			videotape: "á_Video tape____Ó",
    			physicalModel: "á_Physical model_____Ó",
    			computerProgram: "á_Computer program______Ó",
    			disc: "á_Disc__Ó",
    			cartridgeTape: "á_Cartridge tape_____Ó",
    			magneticTape: "á_Magnetic tape_____Ó",
    			online: "á_Online___Ó",
    			cdrom: "á_CD-ROM___Ó",
    			electronicBulletinBoard: "á_Electronic bulletin board_________Ó",
    			electronicMailSystem: "á_Electronic mail system________Ó"
    		},
    		srctime: "á_Source Time Period of Content__________Ó",
    		srccurr: "á_Source Currentness Reference_________Ó",
    		srccitea: "á_Source Citation Abbreviation_________Ó",
    		srccontr: "á_Source Contribution_______Ó"
    	},
    	procstep: {
    		caption: "á_Process Step_____Ó",
    		procdesc: "á_Process Description_______Ó",
    		srcused: "á_Source Used Citation Abbreviation___________Ó",
    		procdate: "á_Process Date_____Ó",
    		proctime: "á_Process Time_____Ó",
    		srcprod: "á_Source Produced Citation Abbreviation____________Ó",
    		proccont: "á_Process Contact______Ó"
    	},
    	cloud: "á_Cloud Cover____Ó"
    },
    
    distinfo: {
    	caption: "á_Distribution Information________Ó",
    	section: {
    		distributor: "á_Distributor____Ó",
    		description: "á_Description____Ó",
    		orderProcess: "á_Order Process_____Ó",
    		prerequisites: "á_Prerequisites_____Ó",
    		availability: "á_Availability_____Ó"
    	},
    	distrib: "á_Distributor____Ó",
    	resdesc: {
    		caption: "á_Resource Description_______Ó",
    		liveData: "á_Live Data and Maps______Ó",
    		downloadableData: "á_Downloadable Data______Ó",
    		offlineData: "á_Offline Data_____Ó",
    		staticMapImages: "á_Static Map Images______Ó",
    		sDocument: "á_Other Documents______Ó",
    		application: "á_Applications_____Ó",
    		geographicService: "á_Geographic Services_______Ó",
    		clearingHouse: "á_Clearinghouses_____Ó",
    		mapFiles: "á_Map Files____Ó",
    		geographicActivies: "á_Geographic Activities_______Ó"
    	},
    	distliab: "á_Distribution Liability Statement___________Ó",
    	custom: "á_Custom Order Process_______Ó",
    	techpreq: "á_Technical Prerequisites________Ó",
    	availabl: "á_Availability_____Ó"
    },
    
    eainfo: {
    	caption: "á_Entity and Attribute Information___________Ó",
    	overview: "á_Overview Description_______Ó",
    	eaover: "á_Entity and Attribute Overview__________Ó",
    	eadetcit: "á_Entity and Attribute Detail Citation____________Ó"
    },
    
    idinfo: {
    	caption: "á_Identification Information_________Ó",
    	section: {
    		timeAndStatus: "á_Time and Status______Ó",
    		constraints: "á_Constraints____Ó",
    		contact: "á_Contact___Ó",
    		additional: "á_Additional____Ó"
    	},
    	citeinfo: "á_Citation___Ó",
    	descript: {
    		caption: "á_Description____Ó",
    		sAbstract: "á_Abstract___Ó",
    		purpose: "á_Purpose___Ó",
    		supplinf: "á_Supplemental Information________Ó"
    	},
    	timeperd: {
    		caption: "á_Time Period of Content________Ó",
    		current: {
    			caption: "á_Currentness Reference_______Ó",
    			groundCondition: "á_Ground Condition______Ó",
    			publicationDate: "á_Publication Date______Ó"
    		}
    	},
    	status: {
    		caption: "á_Status___Ó",
    		progress: {
    			caption: "á_Progress___Ó",
     			complete: "á_Complete___Ó",
    			inWork: "á_In work___Ó",
    			planned: "á_Planned___Ó"
    		},
    		update: {
    			caption: "á_Maintenance and Update Frequency___________Ó",
    			continual: "á_Continual____Ó",
    			daily: "á_Daily___Ó",
    			weekly: "á_Weekly___Ó",
    			monthly: "á_Monthly___Ó",
    			annually: "á_Annually___Ó",
    			unknown: "á_Unknown___Ó",
    			asNeeded: "á_As needed____Ó",
    			irregular: "á_Irregular____Ó",
    			nonePlanned: "á_None planned_____Ó"
    		}
    	},
    	spdom: {
    		caption: "á_Extent___Ó",
    		bounding: {
    			caption: "á_Bounding Coordinates_______Ó",
    			westbc: "á_West Bounding Longitude________Ó",
    			eastbc: "á_East Bounding Longitude________Ó",
    			northbc: "á_North Bounding Latitude________Ó",
    			southbc: "á_South Bounding Latitude________Ó"
    		}
    	},
      keywords: {
        caption: "Palabras Claves",
        theme: "Tema",
        place: "Lugar",
        stratum: "Estrato",
        temporal: "Temporal",
        thesaursus: "Diccionario asociado",
        delimited: "Palabras Claves",
        themektIsoTopicCategory: "Tema ISO...",
        themektIsoTopicDialog: "Tema de ISO",
        placektGnis: "Sistema de información de nombres geográficos"
      },
      accconst: "Restricciones de acceso",
      useconst: "Restricciones de uso",
      ptcontac: "Punto de contacto para el recurso",
      browse: {
      	caption: "á_Browse Graphic_____Ó",
      	browsen: "á_Browse Graphic URL______Ó",
      	browsed: "á_Browse Graphic File Description__________Ó",
      	browset: "á_Browse Graphic File Type________Ó"
      },
      datacred: "Crédito de dataset",
      secinfo: {
      	caption: "á_Security Information_______Ó",
      	secsys: "á_Security Classification System__________Ó",
      	secclass: {
      		caption: "á_Security Classification________Ó",
      		topSecret: "á_Top secret____Ó",
      		secret: "á_Secret___Ó",
      		confidential: "á_Confidential_____Ó",
      		restricted: "á_Restricted____Ó",
      		unclassified: "á_Unclassified_____Ó",
      		sensitive: "á_Sensitive____Ó"
      	},
      	sechandl: "á_Security Handling Description__________Ó"
      },
      sNative: "Entorno de dataset nativo",
      crossref: "Referencia cruzada"
    },
    
    metadata: {
    	idinfo: "á_Identification_____Ó",
    	dataqual: "á_Quality___Ó",
    	spdoinfo: "á_Spatial Data Organization_________Ó",
    	spref: "á_Spatial Reference______Ó",
    	eainfo: "á_Entity and Attribute_______Ó",
    	distinfo: "á_Distribution_____Ó",
    	metainfo: "á_Metadata___Ó"
    },
    
    metainfo: {
    	caption: "á_Metadata Information_______Ó",
    	section: {
    		dates: "á_Metadata Dates_____Ó",
    		contact: "á_Metadata Contact______Ó",
    		standard: "á_Metadata Standard______Ó",
    		additional: "á_Additional____Ó"
    	},
      metd: "Fecha de metadatos",
      metrd: "Fecha de revisión de metadatos",
      metfrd: "Fecha de revisión futura de metadatos",
      metstdn: "Nombre estándar de metadatos",
      metstdv: "Versión estándar de metadatos",
      metac: "Restricciones de acceso a metadatos",
      metuc: "Restricciones de uso de metadatos",
      metsi: {
      	caption: "á_Metadata Security Information__________Ó",
      	metscs: "á_Metadata Security Classification System_____________Ó",
      	metsc: "á_Metadata Security Classification___________Ó",
      	metshd: "á_Metadata Security Handling Description____________Ó"
      }
    },
    
    spref: {
    	caption: "á_Spatial Reference Information__________Ó",
    	horizsys: {
    		caption: "á_Horizontal Coordinate System_________Ó",
    		geograph: {
    			caption: "á_Geographic____Ó",
    			latres: "á_Latitude Resolution_______Ó",
    			longres: "á_Longitude Resolution_______Ó",
    			geogunit: {
    				caption: "á_Geographic Coordinate Units_________Ó",
    				decimalDegrees: "á_Decimal degrees______Ó",
    				decimalMinutes: "á_Decimal minutes______Ó",
    				decimalSeconds: "á_Decimal seconds______Ó",
    				degreesAndDecimalMinutes: "á_Degrees and decimal minutes_________Ó",
    				degreesMinutesAndDecimalSeconds: "á_Degrees, minutes, and decimal seconds____________Ó",
    				radians: "á_Radians___Ó",
    				grads: "á_Grads___Ó"
    			}
    		},
    		planar: {
    			caption: "á_Planar___Ó"
    		},
    		local: {
    			caption: "á_Local___Ó",
    			localdes: "á_Local Description______Ó",
    			localgeo: "á_Local Georeference Information__________Ó"
    		},
    		geodetic: {
    			caption: "á_Geodetic Model_____Ó",
    			horizdn: {
    				caption: "á_Horizontal Datum Name_______Ó",
    				nad83: "á_North American Datum of 1983_________Ó",
    				nad27: "á_North American Datum of 1927_________Ó"
    			},
    			ellips: {
    				caption: "á_Ellipsoid Name_____Ó",
    				grs80: "á_Geodetic Reference System 80_________Ó",
    				clarke1866: "á_Clarke 1866____Ó"
    			},
    			semiaxis: "á_Semi-major Axis______Ó",
    			denflat: "á_Denominator of Flattening Ratio__________Ó"
    		}
    	},
    	vertdef: {
    		caption: "á_Vertical Coordinate System_________Ó",
    		altsys: {
    			caption: "á_Altitude System______Ó",
    			altdatum: {
    				caption: "á_Altitude Datum Name_______Ó",
    				navd88: "á_North American Vertical Datum of 1988____________Ó",
    				ngvd29: "á_National Geodetic Vertical Datum of 1929_____________Ó"
    			},
    			altres: "á_Altitude Resolution_______Ó",
    			altunits: {
    				caption: "á_Altitude Distance Units________Ó",
    				meters: "á_Meters___Ó",
    				feet: "á_Feet__Ó"
    			},
    			altenc: {
    				caption: "á_Altitude Encoding Method________Ó",
    				explicit: "á_Explicit elevation coordinate included with horizontal coordinates_____________________Ó",
    				implicit: "á_Implicit coordinate_______Ó",
    				attribute: "á_Attribute values______Ó"
    			}
    		},
    		depthsys: {
    			caption: "á_Depth System_____Ó",
    			depthdn: {
    				caption: "á_Depth Datum Name______Ó",
    				option1: "á_Local surface_____Ó", 
    				option2: "á_Chart datum; datum for sounding reduction_____________Ó", 
    				option3: "á_Lowest astronomical tide________Ó", 
    				option4: "á_Highest astronomical tide_________Ó", 
    				option5: "á_Mean low water_____Ó", 
    				option6: "á_Mean high water______Ó", 
    				option7: "á_Mean sea level_____Ó", 
    				option8: "á_Land survey datum______Ó", 
    				option9: "á_Mean low water springs________Ó", 
    				option10: "á_Mean high water springs________Ó", 
    				option11: "á_Mean low water neap_______Ó", 
    				option12: "á_Mean high water neap_______Ó", 
    				option13: "á_Mean lower low water_______Ó", 
    				option14: "á_Mean lower low water springs_________Ó", 
    				option15: "á_Mean higher high water________Ó", 
    				option16: "á_Mean higher low water_______Ó", 
    				option17: "á_Mean lower high water_______Ó", 
    				option18: "á_Spring tide____Ó", 
    				option19: "á_Tropic lower low water________Ó", 
    				option20: "á_Neap tide____Ó", 
    				option21: "á_High water____Ó", 
    				option22: "á_Higher high water______Ó", 
    				option23: "á_Low water____Ó", 
    				option24: "á_Low-water datum______Ó", 
    				option25: "á_Lowest low water______Ó", 
    				option26: "á_Lower low water______Ó", 
    				option27: "á_Lowest normal low water________Ó", 
    				option28: "á_Mean tide level______Ó", 
    				option29: "á_Indian spring low water________Ó", 
    				option30: "á_High-water full and charge_________Ó", 
    				option31: "á_Low-water full and charge_________Ó", 
    				option32: "á_Columbia River datum_______Ó", 
    				option33: "á_Gulf Coast low water datum_________Ó", 
    				option34: "á_Equatorial springs low water_________Ó", 
    				option35: "á_Approximate lowest astronomical tide____________Ó", 
    				option36: "á_No correction_____Ó"
    			},
    			depthres: "á_Depth Resolution______Ó",
    			depthdu: {
    				caption: "á_Depth Distance Units_______Ó",
    				meters: "á_Meters___Ó",
    				feet: "á_Feet__Ó"
    			},   			
    			depthem: {
    				caption: "á_Depth Encoding Method_______Ó",
    				explicit: "á_Explicit depth coordinate included with horizontal coordinates____________________Ó",
    				implicit: "á_Implicit coordinate_______Ó",
    				attribute: "á_Attribute values______Ó"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "á_Time Period Information________Ó",
    	sngdate: "á_Single Date____Ó",
    	mdattim: "á_Multiple Dates_____Ó",
    	rngdates: "á_Date Range____Ó",
    	caldate: "á_Date__Ó",
    	time: "á_Time__Ó",
    	begdate: "á_Beginning Date_____Ó",
    	begtime: "á_Beginning Time_____Ó",
    	enddate: "á_Ending Date____Ó",
    	endtime: "á_Ending Time____Ó"
    }
   
  })
);
