define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "ø_FGDC__å",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "ø_None__å",
    	notComplete: "ø_Not complete_____å",
    	other: "ø_Other___å",
    	present: "ø_Present___å",
    	unknown: "ø_Unknown___å",
    	unpublishedMaterial: "ø_Unpublished material_______å"
    },
    
    hints: {
    	integerGreaterThanOne: "ø_(enter an integer > 1)________å",
    	integer0To100: "ø_(enter an integer 0..100)_________å"
    },
    
    citeinfo: {
    	caption: "ø_Citation Information_______å",
    	origin: "ø_Originator____å",
    	pubdate: "ø_Publication Date______å",
    	pubtime: "ø_Publication Time______å",
    	title: "ø_Title___å",
    	edition: "ø_Edition___å",
    	geoform: {
    		caption: "ø_Geospatial Data Presentation Form___________å",
    		atlas: "ø_Atlas___å",
    		audio: "ø_Audio___å",
    		diagram: "ø_Diagram___å",
    		sDocument: "ø_Document___å",
    		globe: "ø_Globe___å",
    		map: "ø_Map__å",
    		model: "ø_Model___å",
    		multiMediaPresentation: "ø_Multimedia presentation________å",
    		profile: "ø_Profile___å",
    		rasterDigitalData: "ø_Raster digital data_______å",
    		remoteSensingImage: "ø_Remote-sensing image_______å",
    		section: "ø_Section___å",
    		spreadsheet: "ø_Spreadsheet____å",
    		tabularDigitalData: "ø_Tabular digital data_______å",
    		vectorDigitalData: "ø_Vector digital data_______å",
    		video: "ø_Video___å",
    		view: "ø_View__å"
    	},
    	serinfo: {
    		caption: "ø_Series Information______å",
    		sername: "ø_Series Name____å",
    		issue: "ø_Issue Identification_______å"
    	},
    	pubinfo: {
    		caption: "ø_Publication Information________å",
    		pubplace: "ø_Publication Place______å",
    		publish: "ø_Publisher____å"
    	},
    	othercit: "ø_Other Citation Details________å",
    	onlink: "ø_Online Linkage (URL)_______å"
    },
    
    cntinfo: {
    	caption: "ø_Contact Information_______å",
    	section: {
    		primary: "ø_Primary___å",
    		phoneAndEmail: "ø_Phone and E-Mail______å",
    		hoursAndInstructions: "ø_Hours and Instructions________å"
    	},
    	cntorgp: {
    		caption: "ø_By organization______å",
    		cntorg: "ø_Organization_____å",
    		cntper: "ø_Person___å"
    	},
    	cntperp: {
    		caption: "ø_By person____å",
    		cntper: "ø_Person___å",
    		cntorg: "ø_Organization_____å"
    	},
    	cntpos: "ø_Position___å",
    	cntaddr: {
    		caption: "ø_Address___å",
    		addrtype: {
    			caption: "ø_Address Type_____å",
    			mailing: "ø_Mailing___å",
    			physical: "ø_Physical___å",
    			mailingAndPhysical: "ø_Mailing and Physical_______å"
    		},
    		address: "ø_Address___å",
    		city: "ø_City__å",
    		state: "ø_State___å",
    		postal: "ø_Postal Code____å",
    		country: "ø_Country___å"
    	},
    	cntvoice: "ø_Voice___å",
    	cnttdd: "ø_TDD/TTY Telephone (hearing impaired)____________å",
    	cntfax: "ø_Fax__å",
    	cntemail: "ø_E-Mail Address_____å",
    	hours: "ø_Hours___å",
    	cntinst: "ø_Instructions_____å"
    },
    
    dataqual: {
    	caption: "ø_Data Quality Information________å",
    	section: {
    		attributeAccuracy: "ø_Attribute Accuracy______å",
    		logicalConsistency: "ø_Logical Consistency_______å",
    		completeness: "ø_Completeness_____å",
    		positionalAccuracy: "ø_Positional Accuracy_______å",
    		lineage: "ø_Lineage___å",
    		cloudCover: "ø_Cloud Cover____å"
    	},
    	attracc: {
    		caption: "ø_Attribute Accuracy______å",
    		attraccr: "ø_Attribute Accuracy Report_________å",
    		qattracc: {
    			caption: "ø_Quantitative Attribute Accuracy Assessment______________å",
    			attraccv: "ø_Attribute Accuracy Value________å",
    			attracce: "ø_Attribute Accuracy Explanation__________å"
    		}
    	},
    	logic: "ø_Logical Consistency Report_________å",
    	complete: "ø_Completeness Report_______å",
    	posacc: "ø_Positional Accuracy_______å",
    	horizpa: {
    		caption: "ø_Horizontal Positional Accuracy__________å",
    		horizpar: "ø_Horizontal Positional Accuracy Report____________å",
    		qhorizpa: {
    			caption: "ø_Quantitative Horizontal Positional Accuracy Assessment_________________å",
    			horizpav: "ø_Horizontal Positional Accuracy Value____________å",
    			horizpae: "ø_Horizontal Positional Accuracy Explanation______________å"
    		}
    	},
    	vertacc: {
    		caption: "ø_Vertical Positional Accuracy_________å",
    		vertaccr: "ø_Vertical Positional Accuracy Report____________å",
    		qvertpa: {
    			caption: "ø_Quantitative Vertical Positional Accuracy Assessment_________________å",
    			vertaccv: "ø_Vertical Positional Accuracy Value___________å",
    			vertacce: "ø_Vertical Positional Accuracy Explanation_____________å"
    		}
    	},
    	lineage: {
    		caption: "ø_Lineage___å"
    	},
    	srcinfo: {
    		caption: "ø_Source Information______å",
    		srccite: "ø_Source Citation______å",
    		srcscale: "ø_Source Scale Denominator________å",
    		typesrc: {
    			caption: "ø_Type of Source Media_______å",
    			paper: "ø_Paper___å",
    			stableBaseMaterial: "ø_Stable-base material_______å",
    			microfiche: "ø_Microfiche____å",
    			microfilm: "ø_Microfilm____å",
    			audiocassette: "ø_Audio cassette_____å",
    			chart: "ø_Chart___å",
    			filmstrip: "ø_Film strip____å",
    			transparency: "ø_Transparency_____å",
    			videocassette: "ø_Video cassette_____å",
    			videodisc: "ø_Video disc____å",
    			videotape: "ø_Video tape____å",
    			physicalModel: "ø_Physical model_____å",
    			computerProgram: "ø_Computer program______å",
    			disc: "ø_Disc__å",
    			cartridgeTape: "ø_Cartridge tape_____å",
    			magneticTape: "ø_Magnetic tape_____å",
    			online: "ø_Online___å",
    			cdrom: "ø_CD-ROM___å",
    			electronicBulletinBoard: "ø_Electronic bulletin board_________å",
    			electronicMailSystem: "ø_Electronic mail system________å"
    		},
    		srctime: "ø_Source Time Period of Content__________å",
    		srccurr: "ø_Source Currentness Reference_________å",
    		srccitea: "ø_Source Citation Abbreviation_________å",
    		srccontr: "ø_Source Contribution_______å"
    	},
    	procstep: {
    		caption: "ø_Process Step_____å",
    		procdesc: "ø_Process Description_______å",
    		srcused: "ø_Source Used Citation Abbreviation___________å",
    		procdate: "ø_Process Date_____å",
    		proctime: "ø_Process Time_____å",
    		srcprod: "ø_Source Produced Citation Abbreviation____________å",
    		proccont: "ø_Process Contact______å"
    	},
    	cloud: "ø_Cloud Cover____å"
    },
    
    distinfo: {
    	caption: "ø_Distribution Information________å",
    	section: {
    		distributor: "ø_Distributor____å",
    		description: "ø_Description____å",
    		orderProcess: "ø_Order Process_____å",
    		prerequisites: "ø_Prerequisites_____å",
    		availability: "ø_Availability_____å"
    	},
    	distrib: "ø_Distributor____å",
    	resdesc: {
    		caption: "ø_Resource Description_______å",
    		liveData: "ø_Live Data and Maps______å",
    		downloadableData: "ø_Downloadable Data______å",
    		offlineData: "ø_Offline Data_____å",
    		staticMapImages: "ø_Static Map Images______å",
    		sDocument: "ø_Other Documents______å",
    		application: "ø_Applications_____å",
    		geographicService: "ø_Geographic Services_______å",
    		clearingHouse: "ø_Clearinghouses_____å",
    		mapFiles: "ø_Map Files____å",
    		geographicActivies: "ø_Geographic Activities_______å"
    	},
    	distliab: "ø_Distribution Liability Statement___________å",
    	custom: "ø_Custom Order Process_______å",
    	techpreq: "ø_Technical Prerequisites________å",
    	availabl: "ø_Availability_____å"
    },
    
    eainfo: {
    	caption: "ø_Entity and Attribute Information___________å",
    	overview: "ø_Overview Description_______å",
    	eaover: "ø_Entity and Attribute Overview__________å",
    	eadetcit: "ø_Entity and Attribute Detail Citation____________å"
    },
    
    idinfo: {
    	caption: "ø_Identification Information_________å",
    	section: {
    		timeAndStatus: "ø_Time and Status______å",
    		constraints: "ø_Constraints____å",
    		contact: "ø_Contact___å",
    		additional: "ø_Additional____å"
    	},
    	citeinfo: "ø_Citation___å",
    	descript: {
    		caption: "ø_Description____å",
    		sAbstract: "ø_Abstract___å",
    		purpose: "ø_Purpose___å",
    		supplinf: "ø_Supplemental Information________å"
    	},
    	timeperd: {
    		caption: "ø_Time Period of Content________å",
    		current: {
    			caption: "ø_Currentness Reference_______å",
    			groundCondition: "ø_Ground Condition______å",
    			publicationDate: "ø_Publication Date______å"
    		}
    	},
    	status: {
    		caption: "ø_Status___å",
    		progress: {
    			caption: "ø_Progress___å",
     			complete: "ø_Complete___å",
    			inWork: "ø_In work___å",
    			planned: "ø_Planned___å"
    		},
    		update: {
    			caption: "ø_Maintenance and Update Frequency___________å",
    			continual: "ø_Continual____å",
    			daily: "ø_Daily___å",
    			weekly: "ø_Weekly___å",
    			monthly: "ø_Monthly___å",
    			annually: "ø_Annually___å",
    			unknown: "ø_Unknown___å",
    			asNeeded: "ø_As needed____å",
    			irregular: "ø_Irregular____å",
    			nonePlanned: "ø_None planned_____å"
    		}
    	},
    	spdom: {
    		caption: "ø_Extent___å",
    		bounding: {
    			caption: "ø_Bounding Coordinates_______å",
    			westbc: "ø_West Bounding Longitude________å",
    			eastbc: "ø_East Bounding Longitude________å",
    			northbc: "ø_North Bounding Latitude________å",
    			southbc: "ø_South Bounding Latitude________å"
    		}
    	},
      keywords: {
        caption: "Nøgleord",
        theme: "Tema",
        place: "Sted",
        stratum: "Lag",
        temporal: "Tidsbestemt",
        thesaursus: "Tilknyttet tesaurus",
        delimited: "Nøgleord",
        themektIsoTopicCategory: "ISO-emne...",
        themektIsoTopicDialog: "ISO-emne",
        placektGnis: "Geographic Names Information System"
      },
      accconst: "Adgangsbegrænsninger",
      useconst: "Brug begrænsninger",
      ptcontac: "Kontaktpunkt for resdource",
      browse: {
      	caption: "ø_Browse Graphic_____å",
      	browsen: "ø_Browse Graphic URL______å",
      	browsed: "ø_Browse Graphic File Description__________å",
      	browset: "ø_Browse Graphic File Type________å"
      },
      datacred: "Datasæt-credit",
      secinfo: {
      	caption: "ø_Security Information_______å",
      	secsys: "ø_Security Classification System__________å",
      	secclass: {
      		caption: "ø_Security Classification________å",
      		topSecret: "ø_Top secret____å",
      		secret: "ø_Secret___å",
      		confidential: "ø_Confidential_____å",
      		restricted: "ø_Restricted____å",
      		unclassified: "ø_Unclassified_____å",
      		sensitive: "ø_Sensitive____å"
      	},
      	sechandl: "ø_Security Handling Description__________å"
      },
      sNative: "Miljø for oprindeligt datasæt",
      crossref: "Krydshenvisning"
    },
    
    metadata: {
    	idinfo: "ø_Identification_____å",
    	dataqual: "ø_Quality___å",
    	spdoinfo: "ø_Spatial Data Organization_________å",
    	spref: "ø_Spatial Reference______å",
    	eainfo: "ø_Entity and Attribute_______å",
    	distinfo: "ø_Distribution_____å",
    	metainfo: "ø_Metadata___å"
    },
    
    metainfo: {
    	caption: "ø_Metadata Information_______å",
    	section: {
    		dates: "ø_Metadata Dates_____å",
    		contact: "ø_Metadata Contact______å",
    		standard: "ø_Metadata Standard______å",
    		additional: "ø_Additional____å"
    	},
      metd: "Metadatadato",
      metrd: "Gennemsynsdato for metadata",
      metfrd: "Fremtidig gennemsynsdato for metadata",
      metstdn: "Metadatastandardnavn",
      metstdv: "Metadatastandardversion",
      metac: "Adgangsbegrænsninger for metadata",
      metuc: "Brugsbegrænsninger for metadata",
      metsi: {
      	caption: "ø_Metadata Security Information__________å",
      	metscs: "ø_Metadata Security Classification System_____________å",
      	metsc: "ø_Metadata Security Classification___________å",
      	metshd: "ø_Metadata Security Handling Description____________å"
      }
    },
    
    spref: {
    	caption: "ø_Spatial Reference Information__________å",
    	horizsys: {
    		caption: "ø_Horizontal Coordinate System_________å",
    		geograph: {
    			caption: "ø_Geographic____å",
    			latres: "ø_Latitude Resolution_______å",
    			longres: "ø_Longitude Resolution_______å",
    			geogunit: {
    				caption: "ø_Geographic Coordinate Units_________å",
    				decimalDegrees: "ø_Decimal degrees______å",
    				decimalMinutes: "ø_Decimal minutes______å",
    				decimalSeconds: "ø_Decimal seconds______å",
    				degreesAndDecimalMinutes: "ø_Degrees and decimal minutes_________å",
    				degreesMinutesAndDecimalSeconds: "ø_Degrees, minutes, and decimal seconds____________å",
    				radians: "ø_Radians___å",
    				grads: "ø_Grads___å"
    			}
    		},
    		planar: {
    			caption: "ø_Planar___å"
    		},
    		local: {
    			caption: "ø_Local___å",
    			localdes: "ø_Local Description______å",
    			localgeo: "ø_Local Georeference Information__________å"
    		},
    		geodetic: {
    			caption: "ø_Geodetic Model_____å",
    			horizdn: {
    				caption: "ø_Horizontal Datum Name_______å",
    				nad83: "ø_North American Datum of 1983_________å",
    				nad27: "ø_North American Datum of 1927_________å"
    			},
    			ellips: {
    				caption: "ø_Ellipsoid Name_____å",
    				grs80: "ø_Geodetic Reference System 80_________å",
    				clarke1866: "ø_Clarke 1866____å"
    			},
    			semiaxis: "ø_Semi-major Axis______å",
    			denflat: "ø_Denominator of Flattening Ratio__________å"
    		}
    	},
    	vertdef: {
    		caption: "ø_Vertical Coordinate System_________å",
    		altsys: {
    			caption: "ø_Altitude System______å",
    			altdatum: {
    				caption: "ø_Altitude Datum Name_______å",
    				navd88: "ø_North American Vertical Datum of 1988____________å",
    				ngvd29: "ø_National Geodetic Vertical Datum of 1929_____________å"
    			},
    			altres: "ø_Altitude Resolution_______å",
    			altunits: {
    				caption: "ø_Altitude Distance Units________å",
    				meters: "ø_Meters___å",
    				feet: "ø_Feet__å"
    			},
    			altenc: {
    				caption: "ø_Altitude Encoding Method________å",
    				explicit: "ø_Explicit elevation coordinate included with horizontal coordinates_____________________å",
    				implicit: "ø_Implicit coordinate_______å",
    				attribute: "ø_Attribute values______å"
    			}
    		},
    		depthsys: {
    			caption: "ø_Depth System_____å",
    			depthdn: {
    				caption: "ø_Depth Datum Name______å",
    				option1: "ø_Local surface_____å", 
    				option2: "ø_Chart datum; datum for sounding reduction_____________å", 
    				option3: "ø_Lowest astronomical tide________å", 
    				option4: "ø_Highest astronomical tide_________å", 
    				option5: "ø_Mean low water_____å", 
    				option6: "ø_Mean high water______å", 
    				option7: "ø_Mean sea level_____å", 
    				option8: "ø_Land survey datum______å", 
    				option9: "ø_Mean low water springs________å", 
    				option10: "ø_Mean high water springs________å", 
    				option11: "ø_Mean low water neap_______å", 
    				option12: "ø_Mean high water neap_______å", 
    				option13: "ø_Mean lower low water_______å", 
    				option14: "ø_Mean lower low water springs_________å", 
    				option15: "ø_Mean higher high water________å", 
    				option16: "ø_Mean higher low water_______å", 
    				option17: "ø_Mean lower high water_______å", 
    				option18: "ø_Spring tide____å", 
    				option19: "ø_Tropic lower low water________å", 
    				option20: "ø_Neap tide____å", 
    				option21: "ø_High water____å", 
    				option22: "ø_Higher high water______å", 
    				option23: "ø_Low water____å", 
    				option24: "ø_Low-water datum______å", 
    				option25: "ø_Lowest low water______å", 
    				option26: "ø_Lower low water______å", 
    				option27: "ø_Lowest normal low water________å", 
    				option28: "ø_Mean tide level______å", 
    				option29: "ø_Indian spring low water________å", 
    				option30: "ø_High-water full and charge_________å", 
    				option31: "ø_Low-water full and charge_________å", 
    				option32: "ø_Columbia River datum_______å", 
    				option33: "ø_Gulf Coast low water datum_________å", 
    				option34: "ø_Equatorial springs low water_________å", 
    				option35: "ø_Approximate lowest astronomical tide____________å", 
    				option36: "ø_No correction_____å"
    			},
    			depthres: "ø_Depth Resolution______å",
    			depthdu: {
    				caption: "ø_Depth Distance Units_______å",
    				meters: "ø_Meters___å",
    				feet: "ø_Feet__å"
    			},   			
    			depthem: {
    				caption: "ø_Depth Encoding Method_______å",
    				explicit: "ø_Explicit depth coordinate included with horizontal coordinates____________________å",
    				implicit: "ø_Implicit coordinate_______å",
    				attribute: "ø_Attribute values______å"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "ø_Time Period Information________å",
    	sngdate: "ø_Single Date____å",
    	mdattim: "ø_Multiple Dates_____å",
    	rngdates: "ø_Date Range____å",
    	caldate: "ø_Date__å",
    	time: "ø_Time__å",
    	begdate: "ø_Beginning Date_____å",
    	begtime: "ø_Beginning Time_____å",
    	enddate: "ø_Ending Date____å",
    	endtime: "ø_Ending Time____å"
    }
   
  })
);
