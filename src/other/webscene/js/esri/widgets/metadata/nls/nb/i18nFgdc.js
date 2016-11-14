define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "å_FGDC__ø",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "å_None__ø",
    	notComplete: "å_Not complete_____ø",
    	other: "å_Other___ø",
    	present: "å_Present___ø",
    	unknown: "å_Unknown___ø",
    	unpublishedMaterial: "å_Unpublished material_______ø"
    },
    
    hints: {
    	integerGreaterThanOne: "å_(enter an integer > 1)________ø",
    	integer0To100: "å_(enter an integer 0..100)_________ø"
    },
    
    citeinfo: {
    	caption: "å_Citation Information_______ø",
    	origin: "å_Originator____ø",
    	pubdate: "å_Publication Date______ø",
    	pubtime: "å_Publication Time______ø",
    	title: "å_Title___ø",
    	edition: "å_Edition___ø",
    	geoform: {
    		caption: "å_Geospatial Data Presentation Form___________ø",
    		atlas: "å_Atlas___ø",
    		audio: "å_Audio___ø",
    		diagram: "å_Diagram___ø",
    		sDocument: "å_Document___ø",
    		globe: "å_Globe___ø",
    		map: "å_Map__ø",
    		model: "å_Model___ø",
    		multiMediaPresentation: "å_Multimedia presentation________ø",
    		profile: "å_Profile___ø",
    		rasterDigitalData: "å_Raster digital data_______ø",
    		remoteSensingImage: "å_Remote-sensing image_______ø",
    		section: "å_Section___ø",
    		spreadsheet: "å_Spreadsheet____ø",
    		tabularDigitalData: "å_Tabular digital data_______ø",
    		vectorDigitalData: "å_Vector digital data_______ø",
    		video: "å_Video___ø",
    		view: "å_View__ø"
    	},
    	serinfo: {
    		caption: "å_Series Information______ø",
    		sername: "å_Series Name____ø",
    		issue: "å_Issue Identification_______ø"
    	},
    	pubinfo: {
    		caption: "å_Publication Information________ø",
    		pubplace: "å_Publication Place______ø",
    		publish: "å_Publisher____ø"
    	},
    	othercit: "å_Other Citation Details________ø",
    	onlink: "å_Online Linkage (URL)_______ø"
    },
    
    cntinfo: {
    	caption: "å_Contact Information_______ø",
    	section: {
    		primary: "å_Primary___ø",
    		phoneAndEmail: "å_Phone and E-Mail______ø",
    		hoursAndInstructions: "å_Hours and Instructions________ø"
    	},
    	cntorgp: {
    		caption: "å_By organization______ø",
    		cntorg: "å_Organization_____ø",
    		cntper: "å_Person___ø"
    	},
    	cntperp: {
    		caption: "å_By person____ø",
    		cntper: "å_Person___ø",
    		cntorg: "å_Organization_____ø"
    	},
    	cntpos: "å_Position___ø",
    	cntaddr: {
    		caption: "å_Address___ø",
    		addrtype: {
    			caption: "å_Address Type_____ø",
    			mailing: "å_Mailing___ø",
    			physical: "å_Physical___ø",
    			mailingAndPhysical: "å_Mailing and Physical_______ø"
    		},
    		address: "å_Address___ø",
    		city: "å_City__ø",
    		state: "å_State___ø",
    		postal: "å_Postal Code____ø",
    		country: "å_Country___ø"
    	},
    	cntvoice: "å_Voice___ø",
    	cnttdd: "å_TDD/TTY Telephone (hearing impaired)____________ø",
    	cntfax: "å_Fax__ø",
    	cntemail: "å_E-Mail Address_____ø",
    	hours: "å_Hours___ø",
    	cntinst: "å_Instructions_____ø"
    },
    
    dataqual: {
    	caption: "å_Data Quality Information________ø",
    	section: {
    		attributeAccuracy: "å_Attribute Accuracy______ø",
    		logicalConsistency: "å_Logical Consistency_______ø",
    		completeness: "å_Completeness_____ø",
    		positionalAccuracy: "å_Positional Accuracy_______ø",
    		lineage: "å_Lineage___ø",
    		cloudCover: "å_Cloud Cover____ø"
    	},
    	attracc: {
    		caption: "å_Attribute Accuracy______ø",
    		attraccr: "å_Attribute Accuracy Report_________ø",
    		qattracc: {
    			caption: "å_Quantitative Attribute Accuracy Assessment______________ø",
    			attraccv: "å_Attribute Accuracy Value________ø",
    			attracce: "å_Attribute Accuracy Explanation__________ø"
    		}
    	},
    	logic: "å_Logical Consistency Report_________ø",
    	complete: "å_Completeness Report_______ø",
    	posacc: "å_Positional Accuracy_______ø",
    	horizpa: {
    		caption: "å_Horizontal Positional Accuracy__________ø",
    		horizpar: "å_Horizontal Positional Accuracy Report____________ø",
    		qhorizpa: {
    			caption: "å_Quantitative Horizontal Positional Accuracy Assessment_________________ø",
    			horizpav: "å_Horizontal Positional Accuracy Value____________ø",
    			horizpae: "å_Horizontal Positional Accuracy Explanation______________ø"
    		}
    	},
    	vertacc: {
    		caption: "å_Vertical Positional Accuracy_________ø",
    		vertaccr: "å_Vertical Positional Accuracy Report____________ø",
    		qvertpa: {
    			caption: "å_Quantitative Vertical Positional Accuracy Assessment_________________ø",
    			vertaccv: "å_Vertical Positional Accuracy Value___________ø",
    			vertacce: "å_Vertical Positional Accuracy Explanation_____________ø"
    		}
    	},
    	lineage: {
    		caption: "å_Lineage___ø"
    	},
    	srcinfo: {
    		caption: "å_Source Information______ø",
    		srccite: "å_Source Citation______ø",
    		srcscale: "å_Source Scale Denominator________ø",
    		typesrc: {
    			caption: "å_Type of Source Media_______ø",
    			paper: "å_Paper___ø",
    			stableBaseMaterial: "å_Stable-base material_______ø",
    			microfiche: "å_Microfiche____ø",
    			microfilm: "å_Microfilm____ø",
    			audiocassette: "å_Audio cassette_____ø",
    			chart: "å_Chart___ø",
    			filmstrip: "å_Film strip____ø",
    			transparency: "å_Transparency_____ø",
    			videocassette: "å_Video cassette_____ø",
    			videodisc: "å_Video disc____ø",
    			videotape: "å_Video tape____ø",
    			physicalModel: "å_Physical model_____ø",
    			computerProgram: "å_Computer program______ø",
    			disc: "å_Disc__ø",
    			cartridgeTape: "å_Cartridge tape_____ø",
    			magneticTape: "å_Magnetic tape_____ø",
    			online: "å_Online___ø",
    			cdrom: "å_CD-ROM___ø",
    			electronicBulletinBoard: "å_Electronic bulletin board_________ø",
    			electronicMailSystem: "å_Electronic mail system________ø"
    		},
    		srctime: "å_Source Time Period of Content__________ø",
    		srccurr: "å_Source Currentness Reference_________ø",
    		srccitea: "å_Source Citation Abbreviation_________ø",
    		srccontr: "å_Source Contribution_______ø"
    	},
    	procstep: {
    		caption: "å_Process Step_____ø",
    		procdesc: "å_Process Description_______ø",
    		srcused: "å_Source Used Citation Abbreviation___________ø",
    		procdate: "å_Process Date_____ø",
    		proctime: "å_Process Time_____ø",
    		srcprod: "å_Source Produced Citation Abbreviation____________ø",
    		proccont: "å_Process Contact______ø"
    	},
    	cloud: "å_Cloud Cover____ø"
    },
    
    distinfo: {
    	caption: "å_Distribution Information________ø",
    	section: {
    		distributor: "å_Distributor____ø",
    		description: "å_Description____ø",
    		orderProcess: "å_Order Process_____ø",
    		prerequisites: "å_Prerequisites_____ø",
    		availability: "å_Availability_____ø"
    	},
    	distrib: "å_Distributor____ø",
    	resdesc: {
    		caption: "å_Resource Description_______ø",
    		liveData: "å_Live Data and Maps______ø",
    		downloadableData: "å_Downloadable Data______ø",
    		offlineData: "å_Offline Data_____ø",
    		staticMapImages: "å_Static Map Images______ø",
    		sDocument: "å_Other Documents______ø",
    		application: "å_Applications_____ø",
    		geographicService: "å_Geographic Services_______ø",
    		clearingHouse: "å_Clearinghouses_____ø",
    		mapFiles: "å_Map Files____ø",
    		geographicActivies: "å_Geographic Activities_______ø"
    	},
    	distliab: "å_Distribution Liability Statement___________ø",
    	custom: "å_Custom Order Process_______ø",
    	techpreq: "å_Technical Prerequisites________ø",
    	availabl: "å_Availability_____ø"
    },
    
    eainfo: {
    	caption: "å_Entity and Attribute Information___________ø",
    	overview: "å_Overview Description_______ø",
    	eaover: "å_Entity and Attribute Overview__________ø",
    	eadetcit: "å_Entity and Attribute Detail Citation____________ø"
    },
    
    idinfo: {
    	caption: "å_Identification Information_________ø",
    	section: {
    		timeAndStatus: "å_Time and Status______ø",
    		constraints: "å_Constraints____ø",
    		contact: "å_Contact___ø",
    		additional: "å_Additional____ø"
    	},
    	citeinfo: "å_Citation___ø",
    	descript: {
    		caption: "å_Description____ø",
    		sAbstract: "å_Abstract___ø",
    		purpose: "å_Purpose___ø",
    		supplinf: "å_Supplemental Information________ø"
    	},
    	timeperd: {
    		caption: "å_Time Period of Content________ø",
    		current: {
    			caption: "å_Currentness Reference_______ø",
    			groundCondition: "å_Ground Condition______ø",
    			publicationDate: "å_Publication Date______ø"
    		}
    	},
    	status: {
    		caption: "å_Status___ø",
    		progress: {
    			caption: "å_Progress___ø",
     			complete: "å_Complete___ø",
    			inWork: "å_In work___ø",
    			planned: "å_Planned___ø"
    		},
    		update: {
    			caption: "å_Maintenance and Update Frequency___________ø",
    			continual: "å_Continual____ø",
    			daily: "å_Daily___ø",
    			weekly: "å_Weekly___ø",
    			monthly: "å_Monthly___ø",
    			annually: "å_Annually___ø",
    			unknown: "å_Unknown___ø",
    			asNeeded: "å_As needed____ø",
    			irregular: "å_Irregular____ø",
    			nonePlanned: "å_None planned_____ø"
    		}
    	},
    	spdom: {
    		caption: "å_Extent___ø",
    		bounding: {
    			caption: "å_Bounding Coordinates_______ø",
    			westbc: "å_West Bounding Longitude________ø",
    			eastbc: "å_East Bounding Longitude________ø",
    			northbc: "å_North Bounding Latitude________ø",
    			southbc: "å_South Bounding Latitude________ø"
    		}
    	},
      keywords: {
        caption: "Nøkkelord",
        theme: "Tema",
        place: "sted",
        stratum: "Stratum",
        temporal: "Tidsbestemt",
        thesaursus: "Tilknyttet synonymordbok",
        delimited: "Nøkkelord",
        themektIsoTopicCategory: "ISO-emne...",
        themektIsoTopicDialog: "ISO-emne",
        placektGnis: "Informasjonssystem for geografiske navn"
      },
      accconst: "Tilgangsbegrensninger",
      useconst: "Brukerbegrensninger",
      ptcontac: "Kontaktpunkt for ressursen",
      browse: {
      	caption: "å_Browse Graphic_____ø",
      	browsen: "å_Browse Graphic URL______ø",
      	browsed: "å_Browse Graphic File Description__________ø",
      	browset: "å_Browse Graphic File Type________ø"
      },
      datacred: "Datasettkreditt",
      secinfo: {
      	caption: "å_Security Information_______ø",
      	secsys: "å_Security Classification System__________ø",
      	secclass: {
      		caption: "å_Security Classification________ø",
      		topSecret: "å_Top secret____ø",
      		secret: "å_Secret___ø",
      		confidential: "å_Confidential_____ø",
      		restricted: "å_Restricted____ø",
      		unclassified: "å_Unclassified_____ø",
      		sensitive: "å_Sensitive____ø"
      	},
      	sechandl: "å_Security Handling Description__________ø"
      },
      sNative: "Miljø for innebygd datasett",
      crossref: "Kryssreferanse"
    },
    
    metadata: {
    	idinfo: "å_Identification_____ø",
    	dataqual: "å_Quality___ø",
    	spdoinfo: "å_Spatial Data Organization_________ø",
    	spref: "å_Spatial Reference______ø",
    	eainfo: "å_Entity and Attribute_______ø",
    	distinfo: "å_Distribution_____ø",
    	metainfo: "å_Metadata___ø"
    },
    
    metainfo: {
    	caption: "å_Metadata Information_______ø",
    	section: {
    		dates: "å_Metadata Dates_____ø",
    		contact: "å_Metadata Contact______ø",
    		standard: "å_Metadata Standard______ø",
    		additional: "å_Additional____ø"
    	},
      metd: "Metadatadato",
      metrd: "Metadatagjennomgangsdato",
      metfrd: "Fremtidig gjennomgangsdato for metadata",
      metstdn: "Metadatastandardnavn",
      metstdv: "Metadatastandardversjon",
      metac: "Metadatatilgangsbegrensninger",
      metuc: "Metadatabrukerbegrensninger",
      metsi: {
      	caption: "å_Metadata Security Information__________ø",
      	metscs: "å_Metadata Security Classification System_____________ø",
      	metsc: "å_Metadata Security Classification___________ø",
      	metshd: "å_Metadata Security Handling Description____________ø"
      }
    },
    
    spref: {
    	caption: "å_Spatial Reference Information__________ø",
    	horizsys: {
    		caption: "å_Horizontal Coordinate System_________ø",
    		geograph: {
    			caption: "å_Geographic____ø",
    			latres: "å_Latitude Resolution_______ø",
    			longres: "å_Longitude Resolution_______ø",
    			geogunit: {
    				caption: "å_Geographic Coordinate Units_________ø",
    				decimalDegrees: "å_Decimal degrees______ø",
    				decimalMinutes: "å_Decimal minutes______ø",
    				decimalSeconds: "å_Decimal seconds______ø",
    				degreesAndDecimalMinutes: "å_Degrees and decimal minutes_________ø",
    				degreesMinutesAndDecimalSeconds: "å_Degrees, minutes, and decimal seconds____________ø",
    				radians: "å_Radians___ø",
    				grads: "å_Grads___ø"
    			}
    		},
    		planar: {
    			caption: "å_Planar___ø"
    		},
    		local: {
    			caption: "å_Local___ø",
    			localdes: "å_Local Description______ø",
    			localgeo: "å_Local Georeference Information__________ø"
    		},
    		geodetic: {
    			caption: "å_Geodetic Model_____ø",
    			horizdn: {
    				caption: "å_Horizontal Datum Name_______ø",
    				nad83: "å_North American Datum of 1983_________ø",
    				nad27: "å_North American Datum of 1927_________ø"
    			},
    			ellips: {
    				caption: "å_Ellipsoid Name_____ø",
    				grs80: "å_Geodetic Reference System 80_________ø",
    				clarke1866: "å_Clarke 1866____ø"
    			},
    			semiaxis: "å_Semi-major Axis______ø",
    			denflat: "å_Denominator of Flattening Ratio__________ø"
    		}
    	},
    	vertdef: {
    		caption: "å_Vertical Coordinate System_________ø",
    		altsys: {
    			caption: "å_Altitude System______ø",
    			altdatum: {
    				caption: "å_Altitude Datum Name_______ø",
    				navd88: "å_North American Vertical Datum of 1988____________ø",
    				ngvd29: "å_National Geodetic Vertical Datum of 1929_____________ø"
    			},
    			altres: "å_Altitude Resolution_______ø",
    			altunits: {
    				caption: "å_Altitude Distance Units________ø",
    				meters: "å_Meters___ø",
    				feet: "å_Feet__ø"
    			},
    			altenc: {
    				caption: "å_Altitude Encoding Method________ø",
    				explicit: "å_Explicit elevation coordinate included with horizontal coordinates_____________________ø",
    				implicit: "å_Implicit coordinate_______ø",
    				attribute: "å_Attribute values______ø"
    			}
    		},
    		depthsys: {
    			caption: "å_Depth System_____ø",
    			depthdn: {
    				caption: "å_Depth Datum Name______ø",
    				option1: "å_Local surface_____ø", 
    				option2: "å_Chart datum; datum for sounding reduction_____________ø", 
    				option3: "å_Lowest astronomical tide________ø", 
    				option4: "å_Highest astronomical tide_________ø", 
    				option5: "å_Mean low water_____ø", 
    				option6: "å_Mean high water______ø", 
    				option7: "å_Mean sea level_____ø", 
    				option8: "å_Land survey datum______ø", 
    				option9: "å_Mean low water springs________ø", 
    				option10: "å_Mean high water springs________ø", 
    				option11: "å_Mean low water neap_______ø", 
    				option12: "å_Mean high water neap_______ø", 
    				option13: "å_Mean lower low water_______ø", 
    				option14: "å_Mean lower low water springs_________ø", 
    				option15: "å_Mean higher high water________ø", 
    				option16: "å_Mean higher low water_______ø", 
    				option17: "å_Mean lower high water_______ø", 
    				option18: "å_Spring tide____ø", 
    				option19: "å_Tropic lower low water________ø", 
    				option20: "å_Neap tide____ø", 
    				option21: "å_High water____ø", 
    				option22: "å_Higher high water______ø", 
    				option23: "å_Low water____ø", 
    				option24: "å_Low-water datum______ø", 
    				option25: "å_Lowest low water______ø", 
    				option26: "å_Lower low water______ø", 
    				option27: "å_Lowest normal low water________ø", 
    				option28: "å_Mean tide level______ø", 
    				option29: "å_Indian spring low water________ø", 
    				option30: "å_High-water full and charge_________ø", 
    				option31: "å_Low-water full and charge_________ø", 
    				option32: "å_Columbia River datum_______ø", 
    				option33: "å_Gulf Coast low water datum_________ø", 
    				option34: "å_Equatorial springs low water_________ø", 
    				option35: "å_Approximate lowest astronomical tide____________ø", 
    				option36: "å_No correction_____ø"
    			},
    			depthres: "å_Depth Resolution______ø",
    			depthdu: {
    				caption: "å_Depth Distance Units_______ø",
    				meters: "å_Meters___ø",
    				feet: "å_Feet__ø"
    			},   			
    			depthem: {
    				caption: "å_Depth Encoding Method_______ø",
    				explicit: "å_Explicit depth coordinate included with horizontal coordinates____________________ø",
    				implicit: "å_Implicit coordinate_______ø",
    				attribute: "å_Attribute values______ø"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "å_Time Period Information________ø",
    	sngdate: "å_Single Date____ø",
    	mdattim: "å_Multiple Dates_____ø",
    	rngdates: "å_Date Range____ø",
    	caldate: "å_Date__ø",
    	time: "å_Time__ø",
    	begdate: "å_Beginning Date_____ø",
    	begtime: "å_Beginning Time_____ø",
    	enddate: "å_Ending Date____ø",
    	endtime: "å_Ending Time____ø"
    }
   
  })
);
