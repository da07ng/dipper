define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Ж_FGDC__Я",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Ж_None__Я",
    	notComplete: "Ж_Not complete_____Я",
    	other: "Ж_Other___Я",
    	present: "Ж_Present___Я",
    	unknown: "Ж_Unknown___Я",
    	unpublishedMaterial: "Ж_Unpublished material_______Я"
    },
    
    hints: {
    	integerGreaterThanOne: "Ж_(enter an integer > 1)________Я",
    	integer0To100: "Ж_(enter an integer 0..100)_________Я"
    },
    
    citeinfo: {
    	caption: "Ж_Citation Information_______Я",
    	origin: "Ж_Originator____Я",
    	pubdate: "Ж_Publication Date______Я",
    	pubtime: "Ж_Publication Time______Я",
    	title: "Ж_Title___Я",
    	edition: "Ж_Edition___Я",
    	geoform: {
    		caption: "Ж_Geospatial Data Presentation Form___________Я",
    		atlas: "Ж_Atlas___Я",
    		audio: "Ж_Audio___Я",
    		diagram: "Ж_Diagram___Я",
    		sDocument: "Ж_Document___Я",
    		globe: "Ж_Globe___Я",
    		map: "Ж_Map__Я",
    		model: "Ж_Model___Я",
    		multiMediaPresentation: "Ж_Multimedia presentation________Я",
    		profile: "Ж_Profile___Я",
    		rasterDigitalData: "Ж_Raster digital data_______Я",
    		remoteSensingImage: "Ж_Remote-sensing image_______Я",
    		section: "Ж_Section___Я",
    		spreadsheet: "Ж_Spreadsheet____Я",
    		tabularDigitalData: "Ж_Tabular digital data_______Я",
    		vectorDigitalData: "Ж_Vector digital data_______Я",
    		video: "Ж_Video___Я",
    		view: "Ж_View__Я"
    	},
    	serinfo: {
    		caption: "Ж_Series Information______Я",
    		sername: "Ж_Series Name____Я",
    		issue: "Ж_Issue Identification_______Я"
    	},
    	pubinfo: {
    		caption: "Ж_Publication Information________Я",
    		pubplace: "Ж_Publication Place______Я",
    		publish: "Ж_Publisher____Я"
    	},
    	othercit: "Ж_Other Citation Details________Я",
    	onlink: "Ж_Online Linkage (URL)_______Я"
    },
    
    cntinfo: {
    	caption: "Ж_Contact Information_______Я",
    	section: {
    		primary: "Ж_Primary___Я",
    		phoneAndEmail: "Ж_Phone and E-Mail______Я",
    		hoursAndInstructions: "Ж_Hours and Instructions________Я"
    	},
    	cntorgp: {
    		caption: "Ж_By organization______Я",
    		cntorg: "Ж_Organization_____Я",
    		cntper: "Ж_Person___Я"
    	},
    	cntperp: {
    		caption: "Ж_By person____Я",
    		cntper: "Ж_Person___Я",
    		cntorg: "Ж_Organization_____Я"
    	},
    	cntpos: "Ж_Position___Я",
    	cntaddr: {
    		caption: "Ж_Address___Я",
    		addrtype: {
    			caption: "Ж_Address Type_____Я",
    			mailing: "Ж_Mailing___Я",
    			physical: "Ж_Physical___Я",
    			mailingAndPhysical: "Ж_Mailing and Physical_______Я"
    		},
    		address: "Ж_Address___Я",
    		city: "Ж_City__Я",
    		state: "Ж_State___Я",
    		postal: "Ж_Postal Code____Я",
    		country: "Ж_Country___Я"
    	},
    	cntvoice: "Ж_Voice___Я",
    	cnttdd: "Ж_TDD/TTY Telephone (hearing impaired)____________Я",
    	cntfax: "Ж_Fax__Я",
    	cntemail: "Ж_E-Mail Address_____Я",
    	hours: "Ж_Hours___Я",
    	cntinst: "Ж_Instructions_____Я"
    },
    
    dataqual: {
    	caption: "Ж_Data Quality Information________Я",
    	section: {
    		attributeAccuracy: "Ж_Attribute Accuracy______Я",
    		logicalConsistency: "Ж_Logical Consistency_______Я",
    		completeness: "Ж_Completeness_____Я",
    		positionalAccuracy: "Ж_Positional Accuracy_______Я",
    		lineage: "Ж_Lineage___Я",
    		cloudCover: "Ж_Cloud Cover____Я"
    	},
    	attracc: {
    		caption: "Ж_Attribute Accuracy______Я",
    		attraccr: "Ж_Attribute Accuracy Report_________Я",
    		qattracc: {
    			caption: "Ж_Quantitative Attribute Accuracy Assessment______________Я",
    			attraccv: "Ж_Attribute Accuracy Value________Я",
    			attracce: "Ж_Attribute Accuracy Explanation__________Я"
    		}
    	},
    	logic: "Ж_Logical Consistency Report_________Я",
    	complete: "Ж_Completeness Report_______Я",
    	posacc: "Ж_Positional Accuracy_______Я",
    	horizpa: {
    		caption: "Ж_Horizontal Positional Accuracy__________Я",
    		horizpar: "Ж_Horizontal Positional Accuracy Report____________Я",
    		qhorizpa: {
    			caption: "Ж_Quantitative Horizontal Positional Accuracy Assessment_________________Я",
    			horizpav: "Ж_Horizontal Positional Accuracy Value____________Я",
    			horizpae: "Ж_Horizontal Positional Accuracy Explanation______________Я"
    		}
    	},
    	vertacc: {
    		caption: "Ж_Vertical Positional Accuracy_________Я",
    		vertaccr: "Ж_Vertical Positional Accuracy Report____________Я",
    		qvertpa: {
    			caption: "Ж_Quantitative Vertical Positional Accuracy Assessment_________________Я",
    			vertaccv: "Ж_Vertical Positional Accuracy Value___________Я",
    			vertacce: "Ж_Vertical Positional Accuracy Explanation_____________Я"
    		}
    	},
    	lineage: {
    		caption: "Ж_Lineage___Я"
    	},
    	srcinfo: {
    		caption: "Ж_Source Information______Я",
    		srccite: "Ж_Source Citation______Я",
    		srcscale: "Ж_Source Scale Denominator________Я",
    		typesrc: {
    			caption: "Ж_Type of Source Media_______Я",
    			paper: "Ж_Paper___Я",
    			stableBaseMaterial: "Ж_Stable-base material_______Я",
    			microfiche: "Ж_Microfiche____Я",
    			microfilm: "Ж_Microfilm____Я",
    			audiocassette: "Ж_Audio cassette_____Я",
    			chart: "Ж_Chart___Я",
    			filmstrip: "Ж_Film strip____Я",
    			transparency: "Ж_Transparency_____Я",
    			videocassette: "Ж_Video cassette_____Я",
    			videodisc: "Ж_Video disc____Я",
    			videotape: "Ж_Video tape____Я",
    			physicalModel: "Ж_Physical model_____Я",
    			computerProgram: "Ж_Computer program______Я",
    			disc: "Ж_Disc__Я",
    			cartridgeTape: "Ж_Cartridge tape_____Я",
    			magneticTape: "Ж_Magnetic tape_____Я",
    			online: "Ж_Online___Я",
    			cdrom: "Ж_CD-ROM___Я",
    			electronicBulletinBoard: "Ж_Electronic bulletin board_________Я",
    			electronicMailSystem: "Ж_Electronic mail system________Я"
    		},
    		srctime: "Ж_Source Time Period of Content__________Я",
    		srccurr: "Ж_Source Currentness Reference_________Я",
    		srccitea: "Ж_Source Citation Abbreviation_________Я",
    		srccontr: "Ж_Source Contribution_______Я"
    	},
    	procstep: {
    		caption: "Ж_Process Step_____Я",
    		procdesc: "Ж_Process Description_______Я",
    		srcused: "Ж_Source Used Citation Abbreviation___________Я",
    		procdate: "Ж_Process Date_____Я",
    		proctime: "Ж_Process Time_____Я",
    		srcprod: "Ж_Source Produced Citation Abbreviation____________Я",
    		proccont: "Ж_Process Contact______Я"
    	},
    	cloud: "Ж_Cloud Cover____Я"
    },
    
    distinfo: {
    	caption: "Ж_Distribution Information________Я",
    	section: {
    		distributor: "Ж_Distributor____Я",
    		description: "Ж_Description____Я",
    		orderProcess: "Ж_Order Process_____Я",
    		prerequisites: "Ж_Prerequisites_____Я",
    		availability: "Ж_Availability_____Я"
    	},
    	distrib: "Ж_Distributor____Я",
    	resdesc: {
    		caption: "Ж_Resource Description_______Я",
    		liveData: "Ж_Live Data and Maps______Я",
    		downloadableData: "Ж_Downloadable Data______Я",
    		offlineData: "Ж_Offline Data_____Я",
    		staticMapImages: "Ж_Static Map Images______Я",
    		sDocument: "Ж_Other Documents______Я",
    		application: "Ж_Applications_____Я",
    		geographicService: "Ж_Geographic Services_______Я",
    		clearingHouse: "Ж_Clearinghouses_____Я",
    		mapFiles: "Ж_Map Files____Я",
    		geographicActivies: "Ж_Geographic Activities_______Я"
    	},
    	distliab: "Ж_Distribution Liability Statement___________Я",
    	custom: "Ж_Custom Order Process_______Я",
    	techpreq: "Ж_Technical Prerequisites________Я",
    	availabl: "Ж_Availability_____Я"
    },
    
    eainfo: {
    	caption: "Ж_Entity and Attribute Information___________Я",
    	overview: "Ж_Overview Description_______Я",
    	eaover: "Ж_Entity and Attribute Overview__________Я",
    	eadetcit: "Ж_Entity and Attribute Detail Citation____________Я"
    },
    
    idinfo: {
    	caption: "Ж_Identification Information_________Я",
    	section: {
    		timeAndStatus: "Ж_Time and Status______Я",
    		constraints: "Ж_Constraints____Я",
    		contact: "Ж_Contact___Я",
    		additional: "Ж_Additional____Я"
    	},
    	citeinfo: "Ж_Citation___Я",
    	descript: {
    		caption: "Ж_Description____Я",
    		sAbstract: "Ж_Abstract___Я",
    		purpose: "Ж_Purpose___Я",
    		supplinf: "Ж_Supplemental Information________Я"
    	},
    	timeperd: {
    		caption: "Ж_Time Period of Content________Я",
    		current: {
    			caption: "Ж_Currentness Reference_______Я",
    			groundCondition: "Ж_Ground Condition______Я",
    			publicationDate: "Ж_Publication Date______Я"
    		}
    	},
    	status: {
    		caption: "Ж_Status___Я",
    		progress: {
    			caption: "Ж_Progress___Я",
     			complete: "Ж_Complete___Я",
    			inWork: "Ж_In work___Я",
    			planned: "Ж_Planned___Я"
    		},
    		update: {
    			caption: "Ж_Maintenance and Update Frequency___________Я",
    			continual: "Ж_Continual____Я",
    			daily: "Ж_Daily___Я",
    			weekly: "Ж_Weekly___Я",
    			monthly: "Ж_Monthly___Я",
    			annually: "Ж_Annually___Я",
    			unknown: "Ж_Unknown___Я",
    			asNeeded: "Ж_As needed____Я",
    			irregular: "Ж_Irregular____Я",
    			nonePlanned: "Ж_None planned_____Я"
    		}
    	},
    	spdom: {
    		caption: "Ж_Extent___Я",
    		bounding: {
    			caption: "Ж_Bounding Coordinates_______Я",
    			westbc: "Ж_West Bounding Longitude________Я",
    			eastbc: "Ж_East Bounding Longitude________Я",
    			northbc: "Ж_North Bounding Latitude________Я",
    			southbc: "Ж_South Bounding Latitude________Я"
    		}
    	},
      keywords: {
        caption: "Ключевые слова",
        theme: "Тема",
        place: "Место",
        stratum: "Ступень",
        temporal: "Временной",
        thesaursus: "Связанный тезаурус",
        delimited: "Ключевые слова",
        themektIsoTopicCategory: "Тема ISO...",
        themektIsoTopicDialog: "Тема ISO",
        placektGnis: "Информационная система географических названий"
      },
      accconst: "Ограничения доступа",
      useconst: "Ограничения на использование",
      ptcontac: "Точка контакта для ресурса",
      browse: {
      	caption: "Ж_Browse Graphic_____Я",
      	browsen: "Ж_Browse Graphic URL______Я",
      	browsed: "Ж_Browse Graphic File Description__________Я",
      	browset: "Ж_Browse Graphic File Type________Я"
      },
      datacred: "Разрешение на передачу набора данных",
      secinfo: {
      	caption: "Ж_Security Information_______Я",
      	secsys: "Ж_Security Classification System__________Я",
      	secclass: {
      		caption: "Ж_Security Classification________Я",
      		topSecret: "Ж_Top secret____Я",
      		secret: "Ж_Secret___Я",
      		confidential: "Ж_Confidential_____Я",
      		restricted: "Ж_Restricted____Я",
      		unclassified: "Ж_Unclassified_____Я",
      		sensitive: "Ж_Sensitive____Я"
      	},
      	sechandl: "Ж_Security Handling Description__________Я"
      },
      sNative: "Параметры среды набора внутренних данных",
      crossref: "Перекрестная ссылка"
    },
    
    metadata: {
    	idinfo: "Ж_Identification_____Я",
    	dataqual: "Ж_Quality___Я",
    	spdoinfo: "Ж_Spatial Data Organization_________Я",
    	spref: "Ж_Spatial Reference______Я",
    	eainfo: "Ж_Entity and Attribute_______Я",
    	distinfo: "Ж_Distribution_____Я",
    	metainfo: "Ж_Metadata___Я"
    },
    
    metainfo: {
    	caption: "Ж_Metadata Information_______Я",
    	section: {
    		dates: "Ж_Metadata Dates_____Я",
    		contact: "Ж_Metadata Contact______Я",
    		standard: "Ж_Metadata Standard______Я",
    		additional: "Ж_Additional____Я"
    	},
      metd: "Дата метаданных",
      metrd: "Дата просмотра метаданных",
      metfrd: "Дата просмотра будущих метаданных",
      metstdn: "Имя стандарта метаданных",
      metstdv: "Версия стандарта метаданных",
      metac: "Ограничения на доступ к метаданным",
      metuc: "Ограничения использования метаданных",
      metsi: {
      	caption: "Ж_Metadata Security Information__________Я",
      	metscs: "Ж_Metadata Security Classification System_____________Я",
      	metsc: "Ж_Metadata Security Classification___________Я",
      	metshd: "Ж_Metadata Security Handling Description____________Я"
      }
    },
    
    spref: {
    	caption: "Ж_Spatial Reference Information__________Я",
    	horizsys: {
    		caption: "Ж_Horizontal Coordinate System_________Я",
    		geograph: {
    			caption: "Ж_Geographic____Я",
    			latres: "Ж_Latitude Resolution_______Я",
    			longres: "Ж_Longitude Resolution_______Я",
    			geogunit: {
    				caption: "Ж_Geographic Coordinate Units_________Я",
    				decimalDegrees: "Ж_Decimal degrees______Я",
    				decimalMinutes: "Ж_Decimal minutes______Я",
    				decimalSeconds: "Ж_Decimal seconds______Я",
    				degreesAndDecimalMinutes: "Ж_Degrees and decimal minutes_________Я",
    				degreesMinutesAndDecimalSeconds: "Ж_Degrees, minutes, and decimal seconds____________Я",
    				radians: "Ж_Radians___Я",
    				grads: "Ж_Grads___Я"
    			}
    		},
    		planar: {
    			caption: "Ж_Planar___Я"
    		},
    		local: {
    			caption: "Ж_Local___Я",
    			localdes: "Ж_Local Description______Я",
    			localgeo: "Ж_Local Georeference Information__________Я"
    		},
    		geodetic: {
    			caption: "Ж_Geodetic Model_____Я",
    			horizdn: {
    				caption: "Ж_Horizontal Datum Name_______Я",
    				nad83: "Ж_North American Datum of 1983_________Я",
    				nad27: "Ж_North American Datum of 1927_________Я"
    			},
    			ellips: {
    				caption: "Ж_Ellipsoid Name_____Я",
    				grs80: "Ж_Geodetic Reference System 80_________Я",
    				clarke1866: "Ж_Clarke 1866____Я"
    			},
    			semiaxis: "Ж_Semi-major Axis______Я",
    			denflat: "Ж_Denominator of Flattening Ratio__________Я"
    		}
    	},
    	vertdef: {
    		caption: "Ж_Vertical Coordinate System_________Я",
    		altsys: {
    			caption: "Ж_Altitude System______Я",
    			altdatum: {
    				caption: "Ж_Altitude Datum Name_______Я",
    				navd88: "Ж_North American Vertical Datum of 1988____________Я",
    				ngvd29: "Ж_National Geodetic Vertical Datum of 1929_____________Я"
    			},
    			altres: "Ж_Altitude Resolution_______Я",
    			altunits: {
    				caption: "Ж_Altitude Distance Units________Я",
    				meters: "Ж_Meters___Я",
    				feet: "Ж_Feet__Я"
    			},
    			altenc: {
    				caption: "Ж_Altitude Encoding Method________Я",
    				explicit: "Ж_Explicit elevation coordinate included with horizontal coordinates_____________________Я",
    				implicit: "Ж_Implicit coordinate_______Я",
    				attribute: "Ж_Attribute values______Я"
    			}
    		},
    		depthsys: {
    			caption: "Ж_Depth System_____Я",
    			depthdn: {
    				caption: "Ж_Depth Datum Name______Я",
    				option1: "Ж_Local surface_____Я", 
    				option2: "Ж_Chart datum; datum for sounding reduction_____________Я", 
    				option3: "Ж_Lowest astronomical tide________Я", 
    				option4: "Ж_Highest astronomical tide_________Я", 
    				option5: "Ж_Mean low water_____Я", 
    				option6: "Ж_Mean high water______Я", 
    				option7: "Ж_Mean sea level_____Я", 
    				option8: "Ж_Land survey datum______Я", 
    				option9: "Ж_Mean low water springs________Я", 
    				option10: "Ж_Mean high water springs________Я", 
    				option11: "Ж_Mean low water neap_______Я", 
    				option12: "Ж_Mean high water neap_______Я", 
    				option13: "Ж_Mean lower low water_______Я", 
    				option14: "Ж_Mean lower low water springs_________Я", 
    				option15: "Ж_Mean higher high water________Я", 
    				option16: "Ж_Mean higher low water_______Я", 
    				option17: "Ж_Mean lower high water_______Я", 
    				option18: "Ж_Spring tide____Я", 
    				option19: "Ж_Tropic lower low water________Я", 
    				option20: "Ж_Neap tide____Я", 
    				option21: "Ж_High water____Я", 
    				option22: "Ж_Higher high water______Я", 
    				option23: "Ж_Low water____Я", 
    				option24: "Ж_Low-water datum______Я", 
    				option25: "Ж_Lowest low water______Я", 
    				option26: "Ж_Lower low water______Я", 
    				option27: "Ж_Lowest normal low water________Я", 
    				option28: "Ж_Mean tide level______Я", 
    				option29: "Ж_Indian spring low water________Я", 
    				option30: "Ж_High-water full and charge_________Я", 
    				option31: "Ж_Low-water full and charge_________Я", 
    				option32: "Ж_Columbia River datum_______Я", 
    				option33: "Ж_Gulf Coast low water datum_________Я", 
    				option34: "Ж_Equatorial springs low water_________Я", 
    				option35: "Ж_Approximate lowest astronomical tide____________Я", 
    				option36: "Ж_No correction_____Я"
    			},
    			depthres: "Ж_Depth Resolution______Я",
    			depthdu: {
    				caption: "Ж_Depth Distance Units_______Я",
    				meters: "Ж_Meters___Я",
    				feet: "Ж_Feet__Я"
    			},   			
    			depthem: {
    				caption: "Ж_Depth Encoding Method_______Я",
    				explicit: "Ж_Explicit depth coordinate included with horizontal coordinates____________________Я",
    				implicit: "Ж_Implicit coordinate_______Я",
    				attribute: "Ж_Attribute values______Я"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Ж_Time Period Information________Я",
    	sngdate: "Ж_Single Date____Я",
    	mdattim: "Ж_Multiple Dates_____Я",
    	rngdates: "Ж_Date Range____Я",
    	caldate: "Ж_Date__Я",
    	time: "Ж_Time__Я",
    	begdate: "Ж_Beginning Date_____Я",
    	begtime: "Ж_Beginning Time_____Я",
    	enddate: "Ж_Ending Date____Я",
    	endtime: "Ж_Ending Time____Я"
    }
   
  })
);
